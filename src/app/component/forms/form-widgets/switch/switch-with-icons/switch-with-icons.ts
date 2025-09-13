import { Component } from '@angular/core';

import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-switch-with-icons',
  imports: [],
  templateUrl: './switch-with-icons.html',
  styleUrls: ['./switch-with-icons.scss'],
})
export class SwitchWithIcons {
  public switchIconSizingData = data.switchIconSizingData;
}
