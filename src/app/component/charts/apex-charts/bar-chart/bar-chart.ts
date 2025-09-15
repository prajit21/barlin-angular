import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { barChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-bar-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./bar-chart.html",
  styleUrls: ["./bar-chart.scss"],
})
export class BarChart {
  public basicBarChart = barChart;
}
