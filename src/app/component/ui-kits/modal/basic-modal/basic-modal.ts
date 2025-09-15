import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { OpenModalBerlin } from "./open-modal-berlin/open-modal-berlin";
import { ScrollingContent } from "./scrolling-content/scrolling-content";
import { Simple } from "./simple/simple";
import { TooltipsPopovers } from "./tooltips-popovers/tooltips-popovers";

@Component({
  selector: "app-basic-modal",
  imports: [],
  templateUrl: "./basic-modal.html",
  styleUrls: ["./basic-modal.scss"],
})
export class BasicModal {
  private modal = inject(NgbModal);

  simpleModal() {
    this.modal.open(Simple);
  }

  scrollingModal() {
    this.modal.open(ScrollingContent);
  }

  tooltipPopoverModal() {
    this.modal.open(TooltipsPopovers, { centered: true });
  }

  berlinModal() {
    this.modal.open(OpenModalBerlin);
  }
}
