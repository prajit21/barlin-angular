import { Component } from '@angular/core';

import * as data from '../../../shared/data/data/ecommerce/ecommerce';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss'],
})
export class Pricing {
  public simplePricingCard = data.simplePricingCard;
  public pricing = data.pricing;
}
