import { Component } from "@angular/core";

import { defaultCheckbox } from "../../../../../shared/data/data/forms/chechbox-radio";

@Component({
  selector: "app-default-checkbox",
  imports: [],
  templateUrl: "./default-checkbox.html",
  styleUrls: ["./default-checkbox.scss"],
})
export class DefaultCheckbox {
  public defaultCheckbox = defaultCheckbox;
}
