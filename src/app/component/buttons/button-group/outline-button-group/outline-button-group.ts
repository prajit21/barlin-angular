import { Component } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/data/buttons/button-group';

@Component({
  selector: 'app-outline-button-group',
  templateUrl: './outline-button-group.html',
  styleUrls: ['./outline-button-group.scss'],
  imports: [],
})
export class OutlineButtonGroup {
  public outlineData = CommonOutline;
}
