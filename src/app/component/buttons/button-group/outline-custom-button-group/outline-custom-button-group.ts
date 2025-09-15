import { Component } from "@angular/core";

import { outlineData } from "../../../../shared/data/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group",
  templateUrl: "./outline-custom-button-group.html",
  styleUrls: ["./outline-custom-button-group.scss"],
  imports: [],
})
export class OutlineCustomButtonGroup {
  public outlineButtonData = outlineData;
}
