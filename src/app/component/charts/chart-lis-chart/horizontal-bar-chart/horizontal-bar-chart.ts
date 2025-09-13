import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { chart8 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-horizontal-bar-chart',
  imports: [ChartistModule],
  templateUrl: './horizontal-bar-chart.html',
  styleUrls: ['./horizontal-bar-chart.scss'],
})
export class HorizontalBarChart {
  public chart8 = chart8;
}
