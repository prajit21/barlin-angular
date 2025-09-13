import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-centered-modal',
  imports: [],
  templateUrl: './centered-modal.html',
  styleUrls: ['./centered-modal.scss'],
})
export class CenteredModal {
  private modalService = inject(NgbModal);

  centeredModal(centeredModalContent: TemplateRef<NgbModal>) {
    this.modalService.open(centeredModalContent, { centered: true });
  }

  close() {
    this.modalService.dismissAll();
  }
}
