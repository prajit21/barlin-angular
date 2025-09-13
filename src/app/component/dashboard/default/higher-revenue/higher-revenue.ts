import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { higherRevenue } from '../../../../shared/data/chart/dashboard';

@Component({
  selector: 'app-higher-revenue',
  imports: [NgApexchartsModule, NgbDropdownModule, Dropdown],
  templateUrl: './higher-revenue.html',
  styleUrl: './higher-revenue.scss',
})
export class HigherRevenue {
  public higherRevenue = higherRevenue;
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
}
