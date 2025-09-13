import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { chart3 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-animating-a-donut-with-svg',
  imports: [ChartistModule],
  templateUrl: './animating-a-donut-with-svg.html',
  styleUrls: ['./animating-a-donut-with-svg.scss'],
})
export class AnimatingADonutWithSvg {
  public chart3 = chart3;
}
