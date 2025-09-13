import { Component } from '@angular/core';

import { RadioToggleButton } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-radio-toggle-buttons',
  imports: [],
  templateUrl: './radio-toggle-buttons.html',
  styleUrls: ['./radio-toggle-buttons.scss'],
})
export class RadioToggleButtons {
  public RadioToggleButtons = RadioToggleButton;
}
