import { Component, input, output } from '@angular/core';

import { CommonSvgIcons } from '../../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-inventory',
  imports: [CommonSvgIcons],
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss'],
})
export class Inventory {
  readonly activeSteps = output<number>();
  readonly activeStep = input<number>();

  previous() {
    const number = this.activeStep()! - 1;
    this.activeSteps.emit(number);
  }
}
