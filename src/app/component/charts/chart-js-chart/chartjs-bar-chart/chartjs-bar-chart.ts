import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import * as data from '../../../../shared/data/chart/charts/chartjs';

@Component({
  selector: 'app-chartjs-bar-chart',
  imports: [BaseChartDirective],
  templateUrl: './chartjs-bar-chart.html',
  styleUrls: ['./chartjs-bar-chart.scss'],
})
export class ChartjsBarChart {
  public barChartChartLabels = data.barChartChartLabels;
  public barChartChartData = data.barChartChartData;
  public barChartChartType = data.barChartChartType;
  public barChartChartColors = data.barChartChartColors;
  public barChartChartOptions = data.barChartChartOptions;
  public barChartChartLegend = data.barChartChartLegend;
}
