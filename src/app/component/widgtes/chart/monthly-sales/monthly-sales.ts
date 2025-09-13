import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { monthlySales } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-monthly-sales',
  imports: [NgApexchartsModule],
  templateUrl: './monthly-sales.html',
  styleUrls: ['./monthly-sales.scss'],
})
export class MonthlySales {
  public monthlySales = monthlySales;
}
