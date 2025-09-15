import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { imageBadges } from "../../../../shared/data/data/ui-kits/tag-pills";

@Component({
  selector: "app-image-badges",
  imports: [CommonModule],
  templateUrl: "./image-badges.html",
  styleUrl: "./image-badges.scss",
})
export class ImageBadges {
  public imageBadges = imageBadges;
}
