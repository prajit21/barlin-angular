import { Component } from "@angular/core";

import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-disabled-tooltip",
  imports: [NgbTooltipModule],
  templateUrl: "./disabled-tooltip.html",
  styleUrl: "./disabled-tooltip.scss",
})
export class DisabledTooltip {}
