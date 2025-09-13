import { Component } from '@angular/core';

import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-inline-style',
  imports: [],
  templateUrl: './inline-style.html',
  styleUrls: ['./inline-style.scss'],
})
export class InlineStyle {
  public inlineStyle = data.inlineStyle;
}
