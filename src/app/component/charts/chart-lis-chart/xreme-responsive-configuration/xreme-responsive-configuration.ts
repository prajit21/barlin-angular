import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { chart9 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-xreme-responsive-configuration',
  imports: [ChartistModule],
  templateUrl: './xreme-responsive-configuration.html',
  styleUrls: ['./xreme-responsive-configuration.scss'],
})
export class XremeResponsiveConfiguration {
  public chart9 = chart9;
}
