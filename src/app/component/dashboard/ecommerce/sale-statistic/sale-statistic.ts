import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { saleStatistic } from '../../../../shared/data/chart/dashboard';

@Component({
  selector: 'app-sale-statistic',
  imports: [Dropdown, NgApexchartsModule],
  templateUrl: './sale-statistic.html',
  styleUrl: './sale-statistic.scss',
})
export class SaleStatistic {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public saleStatistic = saleStatistic;
}
