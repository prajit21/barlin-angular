import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonSvgIcons } from '../../common-svg-icons/common-svg-icons';
import { FeatherIcon } from '../../feather-icon/feather-icon';

@Component({
  selector: 'app-message',
  imports: [FeatherIcon, CommonSvgIcons, RouterModule],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {}
