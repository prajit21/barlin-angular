import { Component } from '@angular/core';

import { checkboxData } from '../../../../shared/data/data/buttons/button-group';

@Component({
  selector: 'app-checkbox-button-group',
  templateUrl: './checkbox-button-group.html',
  styleUrls: ['./checkbox-button-group.scss'],
  imports: [],
})
export class CheckboxButtonGroup {
  public checkBox = checkboxData;
}
