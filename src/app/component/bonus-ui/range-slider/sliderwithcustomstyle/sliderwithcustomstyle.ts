import { Component } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-sliderwithcustomstyle",
  imports: [NgxSliderModule],
  templateUrl: "./sliderwithcustomstyle.html",
  styleUrl: "./sliderwithcustomstyle.scss",
})
export class Sliderwithcustomstyle {
  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
  };
}
