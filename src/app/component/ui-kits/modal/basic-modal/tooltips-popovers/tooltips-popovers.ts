import { Component, inject } from "@angular/core";

import { NgbModal, NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltips-popovers",
  imports: [NgbPopoverModule],
  templateUrl: "./tooltips-popovers.html",
  styleUrls: ["./tooltips-popovers.scss"],
})
export class TooltipsPopovers {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
