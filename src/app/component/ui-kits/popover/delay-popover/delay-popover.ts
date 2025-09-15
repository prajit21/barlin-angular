import { Component } from "@angular/core";

import { NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-delay-popover",
  imports: [NgbPopoverModule],
  templateUrl: "./delay-popover.html",
  styleUrl: "./delay-popover.scss",
})
export class DelayPopover {}
