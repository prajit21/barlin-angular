import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../shared/data/data/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-job-search-listview",
  imports: [JobFilter, NgbRatingModule, CommonModule],
  templateUrl: "./job-search-listview.html",
  styleUrls: ["./job-search-listview.scss"],
})
export class JobSearchListview {
  public config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
