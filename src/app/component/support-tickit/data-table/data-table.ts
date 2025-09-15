import { CommonModule, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import { supportDB } from "../../../shared/data/data/support-tickit";
import {
  SortEvent,
  SupportTicketDirective,
} from "../../../shared/directive/support-ticket.directive";
import { SupportTicketService } from "../../../shared/service/support-ticket.service";

@Component({
  selector: "app-data-table",
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    SupportTicketDirective,
  ],
  providers: [SupportTicketService, DecimalPipe],
  templateUrl: "./data-table.html",
  styleUrls: ["./data-table.scss"],
})
export class DataTable {
  public service = inject(SupportTicketService);

  public countries$: Observable<supportDB[]>;
  public total$: Observable<number>;
  public supportData: supportDB[];

  readonly headers = viewChildren(SupportTicketDirective);

  constructor() {
    this.countries$ = this.service.support$;
    this.total$ = this.service.total$;
  }

  ngOnInit() {
    this.service.support$.subscribe((data) => {
      if (data) {
        this.supportData = data;
      }
    });
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
