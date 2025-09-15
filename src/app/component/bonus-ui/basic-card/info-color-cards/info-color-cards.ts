import { Component, input } from "@angular/core";

import { card } from "../../../../shared/data/data/bonus-ui/basic-card";

@Component({
  selector: "app-info-color-cards",
  imports: [],
  templateUrl: "./info-color-cards.html",
  styleUrls: ["./info-color-cards.scss"],
})
export class InfoColorCards {
  readonly data = input<card>();
}
