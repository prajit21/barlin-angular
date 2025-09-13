import { Component } from '@angular/core';

import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-customisedslider',
  imports: [NgxSliderModule],
  templateUrl: './customisedslider.html',
  styleUrl: './customisedslider.scss',
})
export class Customisedslider {
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    },
  };
}
