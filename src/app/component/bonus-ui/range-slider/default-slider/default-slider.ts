import { Component } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-default-slider",
  imports: [NgxSliderModule],
  templateUrl: "./default-slider.html",
  styleUrls: ["./default-slider.scss"],
})
export class DefaultSlider {
  public value: number = 550;
  public options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
