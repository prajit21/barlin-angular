import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData, jobDetail } from "../../../shared/data/data/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-job-details",
  imports: [JobFilter, NgbRatingModule, CommonModule],
  templateUrl: "./job-details.html",
  styleUrls: ["./job-details.scss"],
})
export class JobDetails {
  public config = inject(NgbRatingConfig);

  public jobDetail = jobDetail;
  public jobCardsData = jobCardsData;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
