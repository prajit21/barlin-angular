import { Component } from "@angular/core";

import { NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-popover",
  imports: [NgbPopoverModule],
  templateUrl: "./basic-popover.html",
  styleUrls: ["./basic-popover.scss"],
})
export class BasicPopover {}
