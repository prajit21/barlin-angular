import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-responsive-tables-background',
  imports: [CommonModule],
  templateUrl: './responsive-tables-background.html',
  styleUrls: ['./responsive-tables-background.scss'],
})
export class ResponsiveTablesBackground {
  public responsiveTablesBackground = data.responsiveTablesBackground;
}
