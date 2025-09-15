import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-animated-horizontal-tabs",
  imports: [NgbNavModule],
  templateUrl: "./animated-horizontal-tabs.html",
  styleUrl: "./animated-horizontal-tabs.scss",
})
export class AnimatedHorizontalTabs {
  public active = 2;
}
