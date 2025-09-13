import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { mixedChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-mixed-chart',
  imports: [NgApexchartsModule],
  templateUrl: './mixed-chart.html',
  styleUrls: ['./mixed-chart.scss'],
})
export class MixedChart {
  public mixedChart = mixedChart;
}
