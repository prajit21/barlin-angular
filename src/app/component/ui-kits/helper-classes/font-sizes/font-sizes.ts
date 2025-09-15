import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-font-sizes",
  imports: [],
  templateUrl: "./font-sizes.html",
  styleUrls: ["./font-sizes.scss"],
})
export class FontSizes {
  public fontSizeData = data.fontSizeData;
}
