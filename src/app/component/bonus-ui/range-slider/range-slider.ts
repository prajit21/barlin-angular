import { Component } from "@angular/core";

import { CustomSlider } from "./custom-slider/custom-slider";
import { Customisedslider } from "./customisedslider/customisedslider";
import { DefaultSlider } from "./default-slider/default-slider";
import { DisabledSlider } from "./disabled-slider/disabled-slider";
import { MinMaxValueSlider } from "./min-max-value-slider/min-max-value-slider";
import { PrettifyNumberSlider } from "./prettify-number-slider/prettify-number-slider";
import { Sliderwithcustomstyle } from "./sliderwithcustomstyle/sliderwithcustomstyle";
import { Verticalslider } from "./verticalslider/verticalslider";

@Component({
  selector: "app-range-slider",
  imports: [
    CustomSlider,
    DefaultSlider,
    DisabledSlider,
    MinMaxValueSlider,
    PrettifyNumberSlider,
    Customisedslider,
    Verticalslider,
    Sliderwithcustomstyle,
  ],
  templateUrl: "./range-slider.html",
  styleUrls: ["./range-slider.scss"],
})
export class RangeSlider {}
