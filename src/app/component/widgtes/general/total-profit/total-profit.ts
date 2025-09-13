import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { totalProfit } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-total-profit',
  imports: [NgApexchartsModule, CommonSvgIcons],
  templateUrl: './total-profit.html',
  styleUrl: './total-profit.scss',
})
export class TotalProfit {
  public offlineSales = totalProfit;
}
