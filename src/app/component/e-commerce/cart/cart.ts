import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import * as data from '../../../shared/data/data/ecommerce/ecommerce';

@Component({
  selector: 'app-cart',
  imports: [RouterModule, FeatherIcon],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class Cart {
  public cartItem = data.cartItem;

  public increment(item: number) {
    this.cartItem[item].counter += 1;
  }

  public decrement(item: number) {
    if (this.cartItem[item].counter > 1) {
      this.cartItem[item].counter -= 1;
    }
  }
}
