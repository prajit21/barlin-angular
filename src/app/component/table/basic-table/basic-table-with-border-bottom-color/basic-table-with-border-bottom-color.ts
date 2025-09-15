import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-basic-table-with-border-bottom-color",
  imports: [],
  templateUrl: "./basic-table-with-border-bottom-color.html",
  styleUrls: ["./basic-table-with-border-bottom-color.scss"],
})
export class BasicTableWithBorderBottomColor {
  public tableData = data.basicTableBottomColor;
}
