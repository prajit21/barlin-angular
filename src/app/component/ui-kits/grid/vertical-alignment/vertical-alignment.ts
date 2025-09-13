import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-vertical-alignment',
  imports: [],
  templateUrl: './vertical-alignment.html',
  styleUrls: ['./vertical-alignment.scss'],
})
export class VerticalAlignment {
  public verticalAlignmentData = Data.alignmentData;
}
