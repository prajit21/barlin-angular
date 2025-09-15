import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { basicAreaChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-basic-area-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./basic-area-chart.html",
  styleUrls: ["./basic-area-chart.scss"],
})
export class BasicAreaChart {
  public basicAreaChart = basicAreaChart;
}
