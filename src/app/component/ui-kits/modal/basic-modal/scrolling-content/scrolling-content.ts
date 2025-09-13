import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-scrolling-content',
  imports: [FeatherIcon],
  templateUrl: './scrolling-content.html',
  styleUrls: ['./scrolling-content.scss'],
})
export class ScrollingContent {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
