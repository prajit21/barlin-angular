import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-table-head-options',
  imports: [],
  templateUrl: './table-head-options.html',
  styleUrls: ['./table-head-options.scss'],
})
export class TableHeadOptions {
  public TableHeadOptions = data.TableHeadOptions;
}
