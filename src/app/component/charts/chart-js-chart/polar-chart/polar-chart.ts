import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as data from "../../../../shared/data/chart/charts/chartjs";

@Component({
  selector: "app-polar-chart",
  imports: [BaseChartDirective],
  templateUrl: "./polar-chart.html",
  styleUrls: ["./polar-chart.scss"],
})
export class PolarChart {
  // polarChart
  public polarChartLabels = data.polarChartLabels;
  public polarChartData = data.polarChartData;
  public polarChartType = data.polarChartType;
  public polarChartOptions = data.polarChartOptions;
  public polarChartLegend = data.polarChartLegend;
}
