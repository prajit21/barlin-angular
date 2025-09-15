import { Component } from "@angular/core";

import { defaultSwitch } from "../../../../../shared/data/data/forms/chechbox-radio";

@Component({
  selector: "app-default-switches",
  imports: [],
  templateUrl: "./default-switches.html",
  styleUrls: ["./default-switches.scss"],
})
export class defaultSwitches {
  public defaultSwitch = defaultSwitch;
}
