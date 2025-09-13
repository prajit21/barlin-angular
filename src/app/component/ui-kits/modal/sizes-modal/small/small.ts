import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-small',
  imports: [FeatherIcon],
  templateUrl: './small.html',
  styleUrls: ['./small.scss'],
})
export class Small {
  public smallModalData = Data.smallModalData;

  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
