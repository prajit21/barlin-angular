import { Component } from "@angular/core";

import { CommonOutline } from "../../../../shared/data/data/buttons/button-group";

@Component({
  selector: "app-outline-edges-button",
  templateUrl: "./outline-edges-button.html",
  styleUrls: ["./outline-edges-button.scss"],
  imports: [],
})
export class OutlineEdgesButton {
  public outlineData = CommonOutline;
}
