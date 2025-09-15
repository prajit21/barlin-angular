import { Component } from "@angular/core";

import * as data from "../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-switch-sizing",
  imports: [],
  templateUrl: "./switch-sizing.html",
  styleUrls: ["./switch-sizing.scss"],
})
export class SwitchSizing {
  public switchSizingData = data.switchSizing;
}
