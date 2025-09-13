import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-number-rating',
  imports: [BarRatingModule],
  templateUrl: './number-rating.html',
  styleUrls: ['./number-rating.scss'],
})
export class NumberRating {
  public faRate = 7;
}
