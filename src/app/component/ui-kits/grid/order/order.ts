import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrls: ['./order.scss'],
})
export class Order {
  public orderGridData = Data.orderGridData;
}
