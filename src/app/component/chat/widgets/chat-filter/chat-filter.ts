import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { chatData, contactData } from '../../../../shared/data/data/chat';

@Component({
  selector: 'app-chat-filter',
  imports: [FeatherIcon, NgbNavModule, CommonSvgIcons],
  templateUrl: './chat-filter.html',
  styleUrls: ['./chat-filter.scss'],
})
export class ChatFilter {
  public active = 1;
  public chat = chatData;
  public Contacts = contactData;

  open() {
    this.Contacts.forEach(data => {
      data.item.forEach(ele => {
        if ((data.id = ele.id)) {
          return (ele.active = !ele.active);
        }
        return ele;
      });
    });
  }
}
