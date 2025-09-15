import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import * as Data from "../../../../shared/data/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-with-controls",
  imports: [CarouselModule],
  templateUrl: "./with-controls.html",
  styleUrls: ["./with-controls.scss"],
})
export class WithControls {
  public withControlOptions = Data.withControlOptions;
  public withControlData = Data.withControlData;
}
