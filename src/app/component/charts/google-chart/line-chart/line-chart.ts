import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { lineChart } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-line-chart',
  imports: [Ng2GoogleChartsModule],
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.scss'],
})
export class LineChart {
  public lineChart = lineChart;
}
