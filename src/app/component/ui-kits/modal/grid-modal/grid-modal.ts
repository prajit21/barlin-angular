import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-grid-modal",
  imports: [],
  templateUrl: "./grid-modal.html",
  styleUrl: "./grid-modal.scss",
})
export class GridModal {
  public modalService = inject(NgbModal);

  gridModal(staticContent: TemplateRef<NgbModal>) {
    this.modalService.open(staticContent);
  }
}
