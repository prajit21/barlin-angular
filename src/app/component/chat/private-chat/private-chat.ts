import { Component } from '@angular/core';

import { CommonSvgIcons } from '../../../shared/component/common-svg-icons/common-svg-icons';
import { ChatBox } from '../widgets/chat-box/chat-box';
import { ChatFilter } from '../widgets/chat-filter/chat-filter';

@Component({
  selector: 'app-private-chat',
  imports: [ChatFilter, ChatBox, CommonSvgIcons],
  templateUrl: './private-chat.html',
  styleUrls: ['./private-chat.scss'],
})
export class PrivateChat {
  public isShow: boolean = false;
}
