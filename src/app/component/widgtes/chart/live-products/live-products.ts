import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { liveProducts } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-live-products",
  imports: [NgApexchartsModule],
  templateUrl: "./live-products.html",
  styleUrls: ["./live-products.scss"],
})
export class LiveProducts {
  public liveProducts = liveProducts;
}
