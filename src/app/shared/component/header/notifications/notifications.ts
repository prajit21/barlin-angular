import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonSvgIcons } from '../../common-svg-icons/common-svg-icons';
import { FeatherIcon } from '../../feather-icon/feather-icon';

@Component({
  selector: 'app-notifications',
  imports: [FeatherIcon, CommonSvgIcons, RouterModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
})
export class Notifications {
  public isOpen: boolean = false;
}
