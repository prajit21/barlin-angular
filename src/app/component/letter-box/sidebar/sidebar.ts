import { Component, output, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CommonSvgIcons } from '../../../shared/component/common-svg-icons/common-svg-icons';
import { letterBox, letterBoxFilter } from '../../../shared/data/data/email';
import { ClickOutsideDirective } from '../../../shared/directive/click-outside.directive';
import { AddLabel } from '../widgets/add-label/add-label';
import { ComposeMessage } from '../widgets/compose-message/compose-message';

@Component({
  selector: 'app-sidebar',
  imports: [CommonSvgIcons, ClickOutsideDirective],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly selectedId = output<number>();
  readonly status = output<boolean>();
  public isOpen: boolean = false;
  public letterBoxFilterData = letterBoxFilter;

  public modalService = inject(NgbModal);

  compose() {
    this.modalService.open(ComposeMessage, {
      size: 'lg',
    });
  }

  addlabel() {
    this.modalService.open(AddLabel, {
      size: 'lg',
    });
  }

  chnageData(item: letterBox) {
    this.letterBoxFilterData.filter(element => {
      if (element.id === item.id) {
        this.selectedId.emit(element.id);
        element.status = true;
      } else {
        element.status = false;
      }
    });
  }
}
