import { Component } from '@angular/core';

import { BasicPopover } from './basic-popover/basic-popover';
import { DelayPopover } from './delay-popover/delay-popover';
import { DisabledElements } from './disabled-elements/disabled-elements';
import { DismissPopover } from './dismiss-popover/dismiss-popover';
import { PopoverDirection } from './popover-direction/popover-direction';
import { PopoverOffset } from './popover-offset/popover-offset';

@Component({
  selector: 'app-popover',
  imports: [
    BasicPopover,
    PopoverDirection,
    PopoverOffset,
    DisabledElements,
    DismissPopover,
    DelayPopover,
  ],
  templateUrl: './popover.html',
  styleUrls: ['./popover.scss'],
})
export class Popover {}
