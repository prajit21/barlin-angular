import { Component } from '@angular/core';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';

@Component({
  selector: 'app-order-overview',
  imports: [NgbProgressbarModule, Dropdown],
  templateUrl: './order-overview.html',
  styleUrl: './order-overview.scss',
})
export class OrderOverview {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
}
