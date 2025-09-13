import { Component } from '@angular/core';

import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-default-style',
  imports: [],
  templateUrl: './default-style.html',
  styleUrls: ['./default-style.scss'],
})
export class DefaultStyle {
  public defaultStyle = data.defaultStyle;
}
