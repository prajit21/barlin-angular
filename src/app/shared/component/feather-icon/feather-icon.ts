import { Component, input } from "@angular/core";

import * as feather from "feather-icons";

@Component({
  selector: "app-feather-icon",
  imports: [],
  templateUrl: "./feather-icon.html",
  styleUrl: "./feather-icon.scss",
})
export class FeatherIcon {
  readonly icon = input<string>();
  readonly class = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
