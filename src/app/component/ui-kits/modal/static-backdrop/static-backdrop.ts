import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-static-backdrop",
  imports: [],
  templateUrl: "./static-backdrop.html",
  styleUrls: ["./static-backdrop.scss"],
})
export class StaticBackdrop {
  private modalService = inject(NgbModal);

  openStaticModal(staticContent: TemplateRef<NgbModal>) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: "static",
      keyboard: false,
    };
    this.modalService.open(staticContent, ngbModalOptions);
  }

  close() {
    this.modalService.dismissAll();
  }
}
