import { Component, input, output } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";
import { BarRatingModule } from "ngx-bar-rating";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

import * as data from "../../../../shared/data/data/ecommerce/ecommerce";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-product-filter",
  imports: [
    CarouselModule,
    BarRatingModule,
    NgxSliderModule,
    ClickOutsideDirective,
  ],
  templateUrl: "./product-filter.html",
  styleUrls: ["./product-filter.scss"],
})
export class ProductFilter {
  public filterData = data.filterData;
  public maxvalue: number = 70;
  public value2: number = 100;
  public rating = 2.6;
  public productFilter = data.productFilter;

  readonly show = input<boolean>();
  readonly childEvent = output<boolean>();

  public options: Options = {
    floor: 0,
    ceil: 200,
  };

  public customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  Outside(value: boolean) {
    value = false;
    this.childEvent.emit(value);
  }
}
