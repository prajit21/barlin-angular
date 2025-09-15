import { Component, input } from "@angular/core";

import { avatar } from "../../../../shared/data/data/ui-kits/avatars";

@Component({
  selector: "app-common-avatars",
  imports: [],
  templateUrl: "./common-avatars.html",
  styleUrls: ["./common-avatars.scss"],
})
export class CommonAvatars {
  readonly data = input<avatar>();
}
