import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { bubbleChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-bubble-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./bubble-chart.html",
  styleUrls: ["./bubble-chart.scss"],
})
export class BubbleChart {
  public bubbleChart = bubbleChart;
}
