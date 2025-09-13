import { Component, input } from '@angular/core';

import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-common-helper-class',
  imports: [],
  templateUrl: './common-helper-class.html',
  styleUrls: ['./common-helper-class.scss'],
})
export class CommonHelperClass {
  readonly data = input<data.commonHelperClasses[]>();
}
