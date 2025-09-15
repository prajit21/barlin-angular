import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { BarRatingModule } from "ngx-bar-rating";
import { Observable } from "rxjs";

import { CommonSvgIcons } from "../../../shared/component/common-svg-icons/common-svg-icons";
import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import { productListInterface } from "../../../shared/data/data/ecommerce/product-list";
import {
  ProductListSortableDirective,
  SortEvent,
} from "../../../shared/directive/product-list-sortable.directive";
import { ProductListService } from "../../../shared/service/product-list.service";

@Component({
  selector: "app-product-list",
  imports: [
    FeatherIcon,
    RouterModule,
    FormsModule,
    CommonSvgIcons,
    BarRatingModule,
    NgbPaginationModule,
    CommonModule,
    ProductListSortableDirective,
  ],
  providers: [DecimalPipe, ProductListService],
  templateUrl: "./product-list.html",
  styleUrls: ["./product-list.scss"],
})
export class ProductList {
  public service = inject(ProductListService);

  public isShow: boolean = false;
  public productList$: Observable<productListInterface[]>;
  public productList: productListInterface[] = [];
  public total$: Observable<number>;

  public readonly headers = viewChildren(ProductListSortableDirective);

  constructor() {
    this.productList$ = this.service.productList$;
    this.total$ = this.service.total$;
  }

  ngOnInit() {
    this.service.productList$.subscribe((data) => {
      if (data) {
        this.productList = data;
      }
    });
  }

  tiggle() {
    this.isShow = !this.isShow;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortable() !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
