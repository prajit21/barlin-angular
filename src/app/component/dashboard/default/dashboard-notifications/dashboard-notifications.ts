import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';

@Component({
  selector: 'app-dashboard-notifications',
  imports: [Dropdown, RouterModule],
  templateUrl: './dashboard-notifications.html',
  styleUrl: './dashboard-notifications.scss',
})
export class DashboardNotifications {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
}
