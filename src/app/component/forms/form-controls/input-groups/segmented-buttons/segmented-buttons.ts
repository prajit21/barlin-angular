import { Component } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-segmented-buttons",
  imports: [NgbDropdownModule],
  templateUrl: "./segmented-buttons.html",
  styleUrls: ["./segmented-buttons.scss"],
})
export class SegmentedButtons {
  public isShow: boolean = false;
  public isShow1: boolean = false;
}
