import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-modal-berlin',
  imports: [CommonModule],
  templateUrl: './open-modal-berlin.html',
  styleUrls: ['./open-modal-berlin.scss'],
})
export class OpenModalBerlin {
  private modal = inject(NgbModal);

  public validate: boolean = false;

  public submit() {
    this.validate = true;
  }
}
