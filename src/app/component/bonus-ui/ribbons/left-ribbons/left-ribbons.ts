import { Component } from '@angular/core';

import { leftRibbonsData } from '../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-left-ribbons',
  imports: [],
  templateUrl: './left-ribbons.html',
  styleUrls: ['./left-ribbons.scss'],
})
export class LeftRibbons {
  public leftRibbonsData = leftRibbonsData;
}
