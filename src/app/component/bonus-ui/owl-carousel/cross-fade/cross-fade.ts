import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import * as Data from "../../../../shared/data/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-cross-fade",
  imports: [CarouselModule],
  templateUrl: "./cross-fade.html",
  styleUrls: ["./cross-fade.scss"],
})
export class CrossFade {
  public crossFadeOptions = Data.crossFadeOptions;
  public crossFadeData = Data.crossFadeData;
}
