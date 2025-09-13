import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-rating',
  imports: [BarRatingModule],
  templateUrl: './horizontal-rating.html',
  styleUrls: ['./horizontal-rating.scss'],
})
export class HorizontalRating {
  public verticalRate = 1;
}
