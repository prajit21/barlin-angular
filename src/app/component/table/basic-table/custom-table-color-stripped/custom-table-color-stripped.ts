import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-custom-table-color-stripped",
  imports: [],
  templateUrl: "./custom-table-color-stripped.html",
  styleUrls: ["./custom-table-color-stripped.scss"],
})
export class CustomTableColorStripped {
  public customTableColorStripped = data.customTableColorStripped;
}
