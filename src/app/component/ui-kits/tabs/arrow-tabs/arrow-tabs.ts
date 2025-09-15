import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-arrow-tabs",
  imports: [NgbNavModule],
  templateUrl: "./arrow-tabs.html",
  styleUrl: "./arrow-tabs.scss",
})
export class ArrowTabs {
  public active = 2;
}
