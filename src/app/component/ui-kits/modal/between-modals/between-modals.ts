import { Component, TemplateRef, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-between-modals",
  imports: [RouterModule],
  templateUrl: "./between-modals.html",
  styleUrls: ["./between-modals.scss"],
})
export class BetweenModals {
  private modalService = inject(NgbModal);

  public modalRef1: NgbModalRef;

  openFirstModal(firstModalContent: TemplateRef<NgbModal>) {
    this.modalRef1 = this.modalService.open(firstModalContent, {
      centered: true,
    });
  }

  openSecondModal(secondModalContent: TemplateRef<NgbModal>) {
    this.modalService.open(secondModalContent, { centered: true });
    this.modalRef1.dismiss();
  }
}
