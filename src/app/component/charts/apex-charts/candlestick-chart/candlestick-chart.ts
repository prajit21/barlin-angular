import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { candelsStickChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-candlestick-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./candlestick-chart.html",
  styleUrls: ["./candlestick-chart.scss"],
})
export class CandlestickChart {
  public candlestickChart = candelsStickChart;
}
