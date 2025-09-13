import { Component } from '@angular/core';

import { checkBox } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-checkbox-list',
  imports: [],
  templateUrl: './checkbox-list.html',
  styleUrls: ['./checkbox-list.scss'],
})
export class CheckboxList {
  public checkBox = checkBox;
}
