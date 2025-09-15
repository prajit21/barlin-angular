import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-striped-row-table",
  imports: [CommonModule],
  templateUrl: "./striped-row-table.html",
  styleUrls: ["./striped-row-table.scss"],
})
export class StripedRowTable {
  public stripedRowTable = data.stripedRowTable;
}
