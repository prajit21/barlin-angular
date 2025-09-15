import { Component, input } from "@angular/core";

import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import { commanData } from "../../../shared/data/data/faq";

@Component({
  selector: "app-comman-data",
  imports: [FeatherIcon],
  templateUrl: "./comman-data.html",
  styleUrls: ["./comman-data.scss"],
})
export class CommanData {
  readonly data = input<commanData>();
}
