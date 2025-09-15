import { Component, input } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { SocialMediaItem } from "../../../../shared/data/data/widgets";

@Component({
  selector: "app-social-media",
  imports: [NgApexchartsModule],
  templateUrl: "./social-media.html",
  styleUrl: "./social-media.scss",
})
export class SocialMedia {
  readonly data = input<SocialMediaItem>();
}
