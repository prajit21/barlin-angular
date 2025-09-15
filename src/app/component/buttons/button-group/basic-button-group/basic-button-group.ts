import { Component } from "@angular/core";

import { commonGroupButton } from "../../../../shared/data/data/buttons/button-group";

@Component({
  selector: "app-basic-button-group",
  templateUrl: "./basic-button-group.html",
  styleUrls: ["./basic-button-group.scss"],
  imports: [],
})
export class BasicButtonGroup {
  public basicGroundData = commonGroupButton;
}
