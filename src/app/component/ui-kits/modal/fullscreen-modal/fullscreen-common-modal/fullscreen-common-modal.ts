import { Component, input, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-common-modal',
  imports: [FeatherIcon],
  templateUrl: './fullscreen-common-modal.html',
  styleUrls: ['./fullscreen-common-modal.scss'],
})
export class FullscreenCommonModal {
  readonly title = input<string>();
  public commonFullScreenData = data.commonFullScreenSizeData;
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
