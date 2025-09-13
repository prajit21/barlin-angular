import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { horizantalListData } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-horizontal-lists',
  imports: [CommonModule],
  templateUrl: './horizontal-lists.html',
  styleUrls: ['./horizontal-lists.scss'],
})
export class HorizontalLists {
  public horizantlListData = horizantalListData;
}
