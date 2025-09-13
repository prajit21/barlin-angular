import { Component } from '@angular/core';

import { EnableFlexBehaviors } from './enable-flex-behaviors/enable-flex-behaviors';
import { GridForColumn } from './grid-for-column/grid-for-column';
import { GridOptions } from './grid-options/grid-options';
import { HorizontalAlignment } from './horizontal-alignment/horizontal-alignment';
import { HorizontalGutters } from './horizontal-gutters/horizontal-gutters';
import { Nesting } from './nesting/nesting';
import { NoGutters } from './no-gutters/no-gutters';
import { Offset } from './offset/offset';
import { Order } from './order/order';
import { RowColumnsGutters } from './row-columns-gutters/row-columns-gutters';
import { VerticalAlignment } from './vertical-alignment/vertical-alignment';
import { VerticalGutters } from './vertical-gutters/vertical-gutters';

@Component({
  selector: 'app-grid',
  imports: [
    GridForColumn,
    GridOptions,
    HorizontalAlignment,
    Nesting,
    Offset,
    Order,
    VerticalAlignment,
    EnableFlexBehaviors,
    HorizontalGutters,
    VerticalGutters,
    RowColumnsGutters,
    NoGutters,
  ],
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
})
export class Grid {}
