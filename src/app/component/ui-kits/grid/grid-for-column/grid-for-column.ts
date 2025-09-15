import { Component } from "@angular/core";

import * as Data from "../../../../shared/data/data/ui-kits/grid";

@Component({
  selector: "app-grid-for-column",
  imports: [],
  templateUrl: "./grid-for-column.html",
  styleUrls: ["./grid-for-column.scss"],
})
export class GridForColumn {
  public gridColumnData = Data.gridColumnData;
}
