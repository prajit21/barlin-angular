import { Component } from "@angular/core";

import { BadgeHeadingsExample } from "./badge-headings-example/badge-headings-example";
import { ButtonBadges } from "./button-badges/button-badges";
import { CloseBadges } from "./close-badges/close-badges";
import { CommonTagPills } from "./common-tag-pills/common-tag-pills";
import { ImageBadges } from "./image-badges/image-badges";
import { ImageWithCloseBadges } from "./image-with-close-badges/image-with-close-badges";
import { PositionedBadges } from "./positioned-badges/positioned-badges";
import * as data from "../../../shared/data/data/ui-kits/tag-pills";

@Component({
  selector: "app-tag-pills",
  imports: [
    BadgeHeadingsExample,
    CommonTagPills,
    PositionedBadges,
    ButtonBadges,
    ImageBadges,
    CloseBadges,
    ImageWithCloseBadges,
  ],
  templateUrl: "./tag-pills.html",
  styleUrls: ["./tag-pills.scss"],
})
export class TagPills {
  public commonTagPillsData = data.commonTagPillsData;
}
