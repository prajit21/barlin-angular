import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-margin",
  imports: [],
  templateUrl: "./margin.html",
  styleUrls: ["./margin.scss"],
})
export class Margin {
  public margin = data.margin;
}
