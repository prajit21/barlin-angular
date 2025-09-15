import { Component } from "@angular/core";

import { outlineCustomData } from "../../../../shared/data/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group2",
  templateUrl: "./outline-custom-button-group2.html",
  styleUrls: ["./outline-custom-button-group2.scss"],
  imports: [],
})
export class OutlineCustomButtonGroup2 {
  public outlineCustom = outlineCustomData;
}
