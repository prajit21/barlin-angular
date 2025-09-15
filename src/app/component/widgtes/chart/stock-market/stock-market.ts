import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { stokeMarket } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-stock-market",
  imports: [NgApexchartsModule],
  templateUrl: "./stock-market.html",
  styleUrls: ["./stock-market.scss"],
})
export class StockMarket {
  public stokeMarket = stokeMarket;
}
