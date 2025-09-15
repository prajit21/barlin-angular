import { Component, inject, viewChild } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BarRatingModule } from "ngx-bar-rating";

import { Products } from "../../../../shared/modal/product.model";
import { ProductDataService } from "../../../../shared/service/product-data.service";
import { ProductService } from "../../../../shared/service/product.service";
import { QuickView } from "../quick-view/quick-view";

@Component({
  selector: "app-product-show",
  imports: [BarRatingModule, RouterModule, QuickView],
  templateUrl: "./product-show.html",
  styleUrls: ["./product-show.scss"],
})
export class ProductShow {
  private productDataServices = inject(ProductDataService);
  private productService = inject(ProductService);

  public getProductData: Products[] = [];

  readonly viewModel = viewChild<QuickView>("viewModel");

  public sidebaron: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;
  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  ngOnInit(): void {
    this.productDataServices.products().subscribe((data) => {
      if (data) {
        this.getProductData = data;
      }
    });
  }

  ngDoCheck() {
    this.col_xl_12 = this.productService.col_xl_12;
    this.col_xl_2 = this.productService.col_xl_2;
    this.col_sm_3 = this.productService.col_xl_12;
    this.col_xl_3 = this.productService.col_xl_3;
    this.xl_4 = this.productService.xl_4;
    this.col_sm_4 = this.productService.col_sm_4;
    this.col_xl_4 = this.productService.col_xl_4;
    this.col_sm_6 = this.productService.col_sm_6;
    this.col_xl_6 = this.productService.col_xl_6;
  }
}
