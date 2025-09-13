import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { salesOverview } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-sales-overview',
  imports: [NgApexchartsModule],
  templateUrl: './sales-overview.html',
  styleUrl: './sales-overview.scss',
})
export class SalesOverview {
  public salesOverview = salesOverview;
}
