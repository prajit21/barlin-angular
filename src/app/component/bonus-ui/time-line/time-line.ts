import { Component } from '@angular/core';

import { AnimatedTimeline } from './animated-timeline/animated-timeline';
import { BasicTimeline } from './basic-timeline/basic-timeline';
import { HalfRoundedTimeline } from './half-rounded-timeline/half-rounded-timeline';
import { HorizontalTimeline } from './horizontal-timeline/horizontal-timeline';
import { HoveringTimeline } from './hovering-timeline/hovering-timeline';
import { VariationTimeline } from './variation-timeline/variation-timeline';

@Component({
  selector: 'app-time-line',
  imports: [
    BasicTimeline,
    HorizontalTimeline,
    HoveringTimeline,
    VariationTimeline,
    AnimatedTimeline,
    HalfRoundedTimeline,
  ],
  templateUrl: './time-line.html',
  styleUrls: ['./time-line.scss'],
})
export class TimeLine {}
