import { Component } from '@angular/core';

import { NumberedBadgeList } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-numbered-badge-lists',
  imports: [],
  templateUrl: './numbered-badge-lists.html',
  styleUrls: ['./numbered-badge-lists.scss'],
})
export class NumberedBadgeLists {
  public NumberedBadgeLists = NumberedBadgeList;
}
