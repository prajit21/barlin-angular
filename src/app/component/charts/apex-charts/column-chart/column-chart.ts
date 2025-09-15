import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { columnChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-column-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./column-chart.html",
  styleUrls: ["./column-chart.scss"],
})
export class ColumnChart {
  public columnChart = columnChart;
}
