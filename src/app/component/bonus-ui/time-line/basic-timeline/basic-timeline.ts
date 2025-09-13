import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-timeline',
  imports: [],
  templateUrl: './basic-timeline.html',
  styleUrls: ['./basic-timeline.scss'],
})
export class BasicTimeline {
  public basicTimelineData = Data.basicTimelineData;
}
