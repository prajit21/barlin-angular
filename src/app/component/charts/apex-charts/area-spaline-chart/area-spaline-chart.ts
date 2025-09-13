import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { areaSpaline } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  imports: [NgApexchartsModule],
  templateUrl: './area-spaline-chart.html',
  styleUrls: ['./area-spaline-chart.scss'],
})
export class AreaSpalineChart {
  public areaSpalineChart = areaSpaline;
}
