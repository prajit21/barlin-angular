import { Component } from '@angular/core';

import { OutlinedCheckboxStyle } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-outlined-checkbox-styles',
  imports: [],
  templateUrl: './outlined-checkbox-styles.html',
  styleUrls: ['./outlined-checkbox-styles.scss'],
})
export class OutlinedCheckboxStyles {
  public OutlinedCheckboxStyles = OutlinedCheckboxStyle;
}
