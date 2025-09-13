import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-selling-prices',
  imports: [CommonSvgIcons, CommonModule, ReactiveFormsModule],
  templateUrl: './selling-prices.html',
  styleUrls: ['./selling-prices.scss'],
})
export class SellingPrices {
  readonly activeSteps = output<number>();

  public activeStep: number = 4;
  public validate: boolean = false;
  public sellingForm: FormGroup;

  constructor() {
    this.sellingForm = new FormGroup({
      initial_Cost: new FormControl('', Validators.required),
      selling_Price: new FormControl('', Validators.required),
      choose_Your_Currency: new FormControl('', Validators.required),
      product_Stocks: new FormControl('', Validators.required),
    });
  }

  next() {
    this.validate = true;
    if (this.sellingForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  get initialCost() {
    return this.sellingForm.get('initial_Cost');
  }
  get sellingPrice() {
    return this.sellingForm.get('selling_Price');
  }
  get chooseYourCurrency() {
    return this.sellingForm.get('choose_Your_Currency');
  }
  get productStocks() {
    return this.sellingForm.get('product_Stocks');
  }
}
