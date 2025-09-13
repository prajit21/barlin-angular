import { Component, inject } from '@angular/core';

import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { jobCardsData } from '../../../shared/data/data/job-search';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-job-search-cardview',
  imports: [JobFilter, NgbRatingModule],
  templateUrl: './job-search-cardview.html',
  styleUrls: ['./job-search-cardview.scss'],
})
export class JobSearchCardview {
  public config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
