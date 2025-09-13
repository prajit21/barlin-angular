import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/data/social-app';

@Component({
  selector: 'app-activity-feed',
  imports: [NgbCollapseModule],
  templateUrl: './activity-feed.html',
  styleUrl: './activity-feed.scss',
})
export class ActivityFeed {
  public isCollapsed = false;
  public activityFeedData = data.activityFeedData;
}
