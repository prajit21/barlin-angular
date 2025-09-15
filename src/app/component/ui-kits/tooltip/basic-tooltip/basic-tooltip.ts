import { Component } from "@angular/core";

import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-tooltip",
  imports: [NgbTooltipModule],
  templateUrl: "./basic-tooltip.html",
  styleUrls: ["./basic-tooltip.scss"],
})
export class BasicTooltip {}
