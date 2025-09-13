import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { chart2 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-svg-path-animation',
  imports: [ChartistModule],
  templateUrl: './svg-path-animation.html',
  styleUrls: ['./svg-path-animation.scss'],
})
export class SVGPathAnimation {
  public chart2 = chart2;
}
