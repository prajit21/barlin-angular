import { Component } from '@angular/core';

import { ActivityLog } from './activity-log/activity-log';
import { CommonAbout } from './common-about/common-about';
import { PepoleYouMayKnow } from './pepole-you-may-know/pepole-you-may-know';
import * as data from '../../../shared/data/data/social-app';
import { TimelineLeft } from '../timeline/timeline-left/timeline-left';
import { TimelineRight } from '../timeline/timeline-right/timeline-right';

@Component({
  selector: 'app-about',
  imports: [TimelineRight, TimelineLeft, PepoleYouMayKnow, ActivityLog, CommonAbout],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  public hobbiesAndInterestData = data.hobbiesAndInterestData;
  public eductionData = data.eductionData;
}
