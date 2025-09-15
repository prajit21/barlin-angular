import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-sizing-tables",
  imports: [CommonModule],
  templateUrl: "./sizing-tables.html",
  styleUrls: ["./sizing-tables.scss"],
})
export class SizingTables {
  public sizingTable = data.sizingTable;
}
