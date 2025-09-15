import { Component } from "@angular/core";

import * as Data from "../../../../shared/data/data/ui-kits/grid";

@Component({
  selector: "app-offset",
  imports: [],
  templateUrl: "./offset.html",
  styleUrls: ["./offset.scss"],
})
export class Offset {
  public offsetGridData = Data.offsetGridData;
}
