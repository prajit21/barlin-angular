import { Component } from "@angular/core";

import * as data from "../../../../../shared/data/data/forms/forms-controls";

@Component({
  selector: "app-without-borders-style",
  imports: [],
  templateUrl: "./without-borders-style.html",
  styleUrls: ["./without-borders-style.scss"],
})
export class WithoutBordersStyle {
  public withoutBorderData = data.withoutBorder;
}
