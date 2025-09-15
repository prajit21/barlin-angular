import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/data/forms/forms-controls";

@Component({
  selector: "app-vertical-style",
  imports: [NgbRatingModule, CommonModule],
  templateUrl: "./vertical-style.html",
  styleUrls: ["./vertical-style.scss"],
})
export class VerticalStyle {
  public verticalStyle = data.verticalStyle;
  public buyingOptionVertical = data.buyingOptionVertical;
}
