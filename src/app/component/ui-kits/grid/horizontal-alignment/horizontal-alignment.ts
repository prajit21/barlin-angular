import { Component } from "@angular/core";

import * as Data from "../../../../shared/data/data/ui-kits/grid";

@Component({
  selector: "app-horizontal-alignment",
  imports: [],
  templateUrl: "./horizontal-alignment.html",
  styleUrls: ["./horizontal-alignment.scss"],
})
export class HorizontalAlignment {
  public horizontialAlinmentData = Data.alignmentData;
}
