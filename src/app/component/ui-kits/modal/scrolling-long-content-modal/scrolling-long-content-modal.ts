import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-scrolling-long-content-modal",
  imports: [FeatherIcon],
  templateUrl: "./scrolling-long-content-modal.html",
  styleUrl: "./scrolling-long-content-modal.scss",
})
export class ScrollingLongContentModal {
  public modalService = inject(NgbModal);

  Scrolling(staticContent: TemplateRef<NgbModal>) {
    this.modalService.open(staticContent);
  }
}
