import { Component, input } from "@angular/core";

import { BorderConfig } from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-common-border",
  imports: [],
  templateUrl: "./common-border.html",
  styleUrl: "./common-border.scss",
})
export class CommonBorder {
  readonly data = input<BorderConfig[]>();
}
