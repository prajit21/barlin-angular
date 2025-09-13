import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AddProductDetails } from './add-product-details/add-product-details';
import { AddProductTab } from './add-product-tab/add-product-tab';
import { Advance } from './advance/advance';
import { ProductCategories } from './product-categories/product-categories';
import { ProductGallery } from './product-gallery/product-gallery';
import { SellingPrices } from './selling-prices/selling-prices';
import { addProductTabData } from '../../../shared/data/data/ecommerce/add-product';

@Component({
  selector: 'app-add-product',
  imports: [
    AddProductTab,
    AddProductDetails,
    Advance,
    ProductCategories,
    ProductGallery,
    SellingPrices,
    CommonModule,
  ],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.scss'],
})
export class AddProduct {
  public addProductTabData = addProductTabData;
  public activeSteps!: number;

  ngOnInit() {
    const data = addProductTabData.filter(data => {
      return data.steps === 1;
    });

    this.activeSteps = data[0].steps;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
