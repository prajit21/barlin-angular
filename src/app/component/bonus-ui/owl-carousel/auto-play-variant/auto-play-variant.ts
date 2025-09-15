import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import * as Data from "../../../../shared/data/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-play-variant",
  imports: [CarouselModule],
  templateUrl: "./auto-play-variant.html",
  styleUrls: ["./auto-play-variant.scss"],
})
export class AutoPlayVariant {
  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;
}
