import { Component, input } from "@angular/core";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import * as data from "../../../../shared/data/data/ui-kits/tag-pills";

@Component({
  selector: "app-common-tag-pills",
  imports: [FeatherIcon],
  templateUrl: "./common-tag-pills.html",
  styleUrls: ["./common-tag-pills.scss"],
})
export class CommonTagPills {
  readonly data = input<data.commonTagPills[]>();
}
