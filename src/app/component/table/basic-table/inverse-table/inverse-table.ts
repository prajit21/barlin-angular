import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-inverse-table",
  imports: [CommonModule],
  templateUrl: "./inverse-table.html",
  styleUrls: ["./inverse-table.scss"],
})
export class InverseTable {
  public tableInvoice = data.tableInvoice;
}
