import { Component, inject } from "@angular/core";

import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faStarHalfAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-current-rating",
  imports: [BarRatingModule, FontAwesomeModule],
  templateUrl: "./current-rating.html",
  styleUrls: ["./current-rating.scss"],
})
export class CurrentRating {
  public library = inject(FaIconLibrary);

  public faoRate = 5.6;
  public faoRated = false;

  constructor() {
    this.library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
}
