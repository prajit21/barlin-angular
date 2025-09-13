import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { chart11 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-holes-in-data',
  imports: [ChartistModule],
  templateUrl: './holes-in-data.html',
  styleUrls: ['./holes-in-data.scss'],
})
export class HolesInData {
  public chart11 = chart11;
}
