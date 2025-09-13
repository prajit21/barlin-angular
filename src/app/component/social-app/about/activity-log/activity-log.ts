import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { activityLog } from '../../../../shared/data/data/social-app';

@Component({
  selector: 'app-activity-log',
  imports: [FeatherIcon],
  templateUrl: './activity-log.html',
  styleUrl: './activity-log.scss',
})
export class ActivityLog {
  public activityLog = activityLog;
}
