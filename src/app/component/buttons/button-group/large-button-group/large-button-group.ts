import { Component } from '@angular/core';

import { commonGroupButton } from '../../../../shared/data/data/buttons/button-group';

@Component({
  selector: 'app-large-button-group',
  templateUrl: './large-button-group.html',
  styleUrls: ['./large-button-group.scss'],
  imports: [],
})
export class LargeButtonGroup {
  public largeButtonGroup = commonGroupButton;
}
