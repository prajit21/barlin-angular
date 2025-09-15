import { Component } from "@angular/core";

import * as data from "../../../../../shared/data/data/forms/form-widgets";

@Component({
  selector: "app-disabled-outline-switch",
  imports: [],
  templateUrl: "./disabled-outline-switch.html",
  styleUrls: ["./disabled-outline-switch.scss"],
})
export class DisabledOutlineSwitch {
  public defaultSwitch = data.defaultSwitch;
}
