import { Component, input } from "@angular/core";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import { hobbiesEduction } from "../../../../shared/data/data/social-app";

@Component({
  selector: "app-common-about",
  imports: [FeatherIcon],
  templateUrl: "./common-about.html",
  styleUrl: "./common-about.scss",
})
export class CommonAbout {
  readonly data = input<hobbiesEduction[]>();
}
