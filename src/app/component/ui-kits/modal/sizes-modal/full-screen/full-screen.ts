import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-full-screen',
  imports: [FeatherIcon],
  templateUrl: './full-screen.html',
  styleUrls: ['./full-screen.scss'],
})
export class FullScreen {
  public modalData = Data.modalData;
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
