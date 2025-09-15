import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-product-details",
  imports: [BarRatingModule, RouterModule],
  templateUrl: "./product-details.html",
  styleUrls: ["./product-details.scss"],
})
export class ProductDetails {
  public rating = 2.6;
}
