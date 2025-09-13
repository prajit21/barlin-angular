import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-horizontal-style',
  imports: [NgbRatingModule],
  templateUrl: './horizontal-style.html',
  styleUrls: ['./horizontal-style.scss'],
})
export class HorizontalStyle {
  public config = inject(NgbRatingConfig);

  public deliveryOption = data.deliveryOption;
  public buyingOption = data.buyingOption;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
