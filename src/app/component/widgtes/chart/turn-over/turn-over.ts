import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { turnOver } from '../../../../shared/data/chart/widgets';

@Component({
  selector: 'app-turn-over',
  imports: [NgApexchartsModule],
  templateUrl: './turn-over.html',
  styleUrls: ['./turn-over.scss'],
})
export class TurnOver {
  public turnOver = turnOver;
}
