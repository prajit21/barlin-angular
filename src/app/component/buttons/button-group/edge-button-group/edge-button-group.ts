import { Component } from '@angular/core';

import { commonGroupButton } from '../../../../shared/data/data/buttons/button-group';

@Component({
  selector: 'app-edge-button-group',
  templateUrl: './edge-button-group.html',
  styleUrls: ['./edge-button-group.scss'],
  imports: [],
})
export class EdgeButtonGroup {
  public edgeGroupData = commonGroupButton;
}
