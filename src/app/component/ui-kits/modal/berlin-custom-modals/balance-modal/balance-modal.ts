import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CommonSvgIcons } from '../../../../../shared/component/common-svg-icons/common-svg-icons';
import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-balance-modal',
  imports: [CommonSvgIcons, FeatherIcon, RouterModule],
  templateUrl: './balance-modal.html',
  styleUrls: ['./balance-modal.scss'],
})
export class BalanceModal {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
