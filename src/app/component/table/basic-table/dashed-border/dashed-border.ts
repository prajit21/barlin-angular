import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-dashed-border',
  imports: [],
  templateUrl: './dashed-border.html',
  styleUrls: ['./dashed-border.scss'],
})
export class DashedBorder {
  public dashboardBorder = data.dashboardBorder;
}
