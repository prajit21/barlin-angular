import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonSvgIcons } from '../../../shared/component/common-svg-icons/common-svg-icons';
import * as data from '../../../shared/data/data/user';

@Component({
  selector: 'app-user-cards',
  imports: [CommonSvgIcons, RouterModule],
  templateUrl: './user-cards.html',
  styleUrls: ['./user-cards.scss'],
})
export class UserCards {
  public userCards = data.userCards;
}
