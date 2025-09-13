import { Component } from '@angular/core';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';

@Component({
  selector: 'app-current-activity',
  imports: [Dropdown],
  templateUrl: './current-activity.html',
  styleUrl: './current-activity.scss',
})
export class CurrentActivity {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
}
