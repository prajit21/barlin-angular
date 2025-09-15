import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { cryptoCurrencyPrices } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-cryptocurrency-prices",
  imports: [NgApexchartsModule],
  templateUrl: "./cryptocurrency-prices.html",
  styleUrls: ["./cryptocurrency-prices.scss"],
})
export class CryptocurrencyPrices {
  public cryptoCurrencyPrices = cryptoCurrencyPrices;
}
