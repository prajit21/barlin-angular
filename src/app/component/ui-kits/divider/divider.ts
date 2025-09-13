import { Component } from '@angular/core';

import { AnimatedColorDivider } from './animated-color-divider/animated-color-divider';
import { HorizontalDashedDivider } from './horizontal-dashed-divider/horizontal-dashed-divider';
import { HorizontalDottedDivider } from './horizontal-dotted-divider/horizontal-dotted-divider';
import { HorizontalEditableDivider } from './horizontal-editable-divider/horizontal-editable-divider';
import { HorizontalSolidDivider } from './horizontal-solid-divider/horizontal-solid-divider';
import { SimpleHorizontalDivider } from './simple-horizontal-divider/simple-horizontal-divider';
import { SimpleVerticalDivider } from './simple-vertical-divider/simple-vertical-divider';
import { VerticalDashedDivider } from './vertical-dashed-divider/vertical-dashed-divider';
import { VerticalDottedDivider } from './vertical-dotted-divider/vertical-dotted-divider';
import { VerticalDoubleDivider } from './vertical-double-divider/vertical-double-divider';

@Component({
  selector: 'app-divider',
  imports: [
    HorizontalSolidDivider,
    HorizontalDashedDivider,
    HorizontalDottedDivider,
    VerticalDashedDivider,
    VerticalDottedDivider,
    VerticalDoubleDivider,
    AnimatedColorDivider,
    HorizontalEditableDivider,
    SimpleHorizontalDivider,
    SimpleVerticalDivider,
  ],
  templateUrl: './divider.html',
  styleUrl: './divider.scss',
})
export class Divider {}
