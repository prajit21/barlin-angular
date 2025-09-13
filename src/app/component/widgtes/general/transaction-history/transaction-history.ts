import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';
import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { transactionHistory } from '../../../../shared/data/data/widgets';

@Component({
  selector: 'app-transaction-history',
  imports: [Dropdown, CommonSvgIcons, RouterModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.scss',
})
export class TransactionHistory {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public transactionHistory = transactionHistory;
}
