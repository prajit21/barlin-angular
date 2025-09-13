import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import { filterChackBox, filterData } from '../../../shared/data/data/job-search';

@Component({
  selector: 'app-job-filter',
  imports: [NgbCollapseModule, FeatherIcon],
  templateUrl: './job-filter.html',
  styleUrls: ['./job-filter.scss'],
})
export class JobFilter {
  public filterData = filterData;
  public filterChackBox = filterChackBox;
  public isCollapsed = false;
  public isOpen: boolean = false;

  outSide() {
    this.isOpen = false;
  }
}
