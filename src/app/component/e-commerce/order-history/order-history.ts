import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";
import { Observable } from "rxjs";

import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import * as data from "../../../shared/data/data/ecommerce/order-history";
import {
  SortEvent,
  orderHistorySortableDirective,
} from "../../../shared/directive/order-historay-sortable.directive";
import { OrderHistoryService } from "../../../shared/service/order-history.service";

@Component({
  selector: "app-order-history",
  imports: [
    FeatherIcon,
    BarRatingModule,
    FormsModule,
    NgbPaginationModule,
    CommonModule,
    orderHistorySortableDirective,
  ],
  providers: [DecimalPipe, OrderHistoryService],
  templateUrl: "./order-history.html",
  styleUrls: ["./order-history.scss"],
})
export class OrderHistory {
  public orderHistoryService = inject(OrderHistoryService);

  public isShow: boolean = false;
  public orderHistoryData$: Observable<data.orderTable[]>;
  public total$: Observable<number>;
  public orderHistory = data.orderHistory;
  public orderTableData = data.orderTableData;
  public orderList: data.orderTable[];

  public readonly headers = viewChildren(orderHistorySortableDirective);
  constructor() {
    this.orderHistoryData$ = this.orderHistoryService.orderList$;
    this.total$ = this.orderHistoryService.total$;
  }

  ngOnInit() {
    this.orderHistoryService.orderList$.subscribe((data) => {
      if (data) {
        this.orderList = data;
      }
    });
  }

  cancelOrder(index: number, id: number) {
    this.orderHistory.forEach((data) => {
      data.data.forEach((element) => {
        if (element.id == id) {
          data.data.splice(index, 1);
        }
      });
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortableOrder() !== column) {
        header.direction = "";
      }
    });
    this.orderHistoryService.sortColumn = column;
    this.orderHistoryService.sortDirection = direction;
  }
}
