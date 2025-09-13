import { Component, input } from '@angular/core';

import { absoluteCard } from '../../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-absolute-card',
  imports: [],
  templateUrl: './absolute-card.html',
  styleUrls: ['./absolute-card.scss'],
})
export class AbsoluteCard {
  readonly data = input<absoluteCard>();
}
