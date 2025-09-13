import { Component, input } from '@angular/core';

import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-common-switch',
  imports: [],
  templateUrl: './common-switch.html',
  styleUrls: ['./common-switch.scss'],
})
export class CommonSwitch {
  readonly data = input<data.commonSwitch[]>();
}
