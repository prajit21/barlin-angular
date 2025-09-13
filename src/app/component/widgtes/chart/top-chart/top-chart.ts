import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-top-chart',
  imports: [NgApexchartsModule],
  templateUrl: './top-chart.html',
  styleUrl: './top-chart.scss',
})
export class TopChart {
  readonly data = input<any>();
}
