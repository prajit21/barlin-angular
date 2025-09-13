import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarRating } from 'ngx-bar-rating';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { customerReview } from '../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-customer-review',
  imports: [Dropdown, CarouselModule, BarRating, RouterModule],
  templateUrl: './customer-review.html',
  styleUrl: './customer-review.scss',
})
export class CustomerReview {
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
  public customerReview = customerReview;
  public customOptions: OwlOptions = {
    loop: true,
    dots: true,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
}
