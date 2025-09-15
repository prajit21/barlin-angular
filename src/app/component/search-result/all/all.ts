import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../shared/data/data/search-result";

@Component({
  selector: "app-all",
  imports: [NgbRatingModule],
  templateUrl: "./all.html",
  styleUrl: "./all.scss",
})
export class All {
  public config = inject(NgbRatingConfig);

  public allData = data.allData;

  constructor() {
    this.config.max = 5;
  }
}
