import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-description-tab",
  imports: [CommonModule, NgbNavModule],
  templateUrl: "./description-tab.html",
  styleUrls: ["./description-tab.scss"],
})
export class DescriptionTab {
  public active = 1;
}
