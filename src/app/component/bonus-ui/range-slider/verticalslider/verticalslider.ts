import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-verticalslider',
  imports: [NgxSliderModule],
  templateUrl: './verticalslider.html',
  styleUrl: './verticalslider.scss',
})
export class Verticalslider {
  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    vertical: true,
  };
}
