import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { radarChart } from "../../../../shared/data/chart/charts/apex-chart";

@Component({
  selector: "app-radar-chart",
  imports: [NgApexchartsModule],
  templateUrl: "./radar-chart.html",
  styleUrls: ["./radar-chart.scss"],
})
export class RadarChart {
  public radarChart = radarChart;
}
