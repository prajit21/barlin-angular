import { Component } from '@angular/core';

import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-square-rating',
  imports: [BarRatingModule],
  templateUrl: './square-rating.html',
  styleUrls: ['./square-rating.scss'],
})
export class SquareRating {
  public squareRate = 1;
}
