import { Component, input } from "@angular/core";

import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-common-margin-padding",
  imports: [],
  templateUrl: "./common-margin-padding.html",
  styleUrls: ["./common-margin-padding.scss"],
})
export class CommonMarginPadding {
  readonly data = input<data.commonSide[]>();
}
