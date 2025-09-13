import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-disabled-lists',
  imports: [CommonModule],
  templateUrl: './disabled-lists.html',
  styleUrls: ['./disabled-lists.scss'],
})
export class DisabledLists {
  public disableData = data.disable;
}
