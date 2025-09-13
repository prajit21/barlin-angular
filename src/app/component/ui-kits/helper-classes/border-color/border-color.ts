import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-border-color',
  imports: [],
  templateUrl: './border-color.html',
  styleUrls: ['./border-color.scss'],
})
export class BorderColor {
  public borderColorData = data.borderColor;
}
