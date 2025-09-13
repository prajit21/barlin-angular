import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { massage } from '../../../../shared/data/data/chat';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-chat-box',
  imports: [CommonModule, CommonSvgIcons, ClickOutsideDirective],
  templateUrl: './chat-box.html',
  styleUrls: ['./chat-box.scss'],
})
export class ChatBox {
  public chatData = massage;
  public isShow: boolean = false;
}
