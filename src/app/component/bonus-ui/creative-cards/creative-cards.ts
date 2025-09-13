import { Component } from '@angular/core';

import { AbsoluteCard } from './absolute-card/absolute-card';
import { BorderBottom } from './border-bottom/border-bottom';
import { BorderLeft } from './border-left/border-left';
import { BorderLight } from './border-light/border-light';
import { BorderPrimaryState } from './border-primary-state/border-primary-state';
import { BorderSecondaryState } from './border-secondary-state/border-secondary-state';
import { BorderTop } from './border-top/border-top';
import { BorderWarningState } from './border-warning-state/border-warning-state';
import { CardOne } from './card-one/card-one';
import { CardThree } from './card-three/card-three';
import { CardTwo } from './card-two/card-two';
import { commonAbsoluteCardData } from '../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-creative-cards',
  imports: [
    AbsoluteCard,
    BorderBottom,
    BorderLeft,
    BorderLight,
    BorderPrimaryState,
    BorderSecondaryState,
    BorderTop,
    BorderWarningState,
    CardTwo,
    CardThree,
    CardOne,
  ],
  templateUrl: './creative-cards.html',
  styleUrls: ['./creative-cards.scss'],
})
export class CreativeCards {
  public commonAbsoluteCardData = commonAbsoluteCardData;
}
