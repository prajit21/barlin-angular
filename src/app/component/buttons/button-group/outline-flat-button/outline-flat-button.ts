import { Component } from '@angular/core';

import { CommonOutline } from '../../../../shared/data/data/buttons/button-group';

@Component({
  selector: 'app-outline-flat-button',
  templateUrl: './outline-flat-button.html',
  styleUrls: ['./outline-flat-button.scss'],
  imports: [],
})
export class OutlineFlatButton {
  public outlineData = CommonOutline;
}
