import { Component } from "@angular/core";

import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-filled-tooltip",
  imports: [NgbTooltipModule],
  templateUrl: "./filled-tooltip.html",
  styleUrls: ["./filled-tooltip.scss"],
})
export class FilledTooltip {}
