import { Component } from '@angular/core';

import { CommonSvgIcons } from '../../../shared/component/common-svg-icons/common-svg-icons';
import { ClickOutsideDirective } from '../../../shared/directive/click-outside.directive';
import { ChatBox } from '../widgets/chat-box/chat-box';
import { ChatFilter } from '../widgets/chat-filter/chat-filter';

@Component({
  selector: 'app-group-chat',
  imports: [ChatFilter, ChatBox, CommonSvgIcons, ClickOutsideDirective],
  templateUrl: './group-chat.html',
  styleUrls: ['./group-chat.scss'],
})
export class GroupChat {
  public isShow: boolean = false;

  public imageData = [
    {
      image: 'assets/images/avtar/16.jpg',
    },
    {
      image: 'assets/images/avtar/4.jpg',
    },
    {
      image: 'assets/images/avtar/7.jpg',
    },
    {
      image: 'assets/images/avtar/11.jpg',
    },
    {
      image: 'assets/images/avtar/4.jpg',
    },
    {
      image: 'assets/images/blog/comment.jpg',
    },
    {
      image: 'assets/images/avtar/7.jpg',
    },
  ];
}
