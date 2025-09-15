import { Component } from "@angular/core";

import { BaseChartDirective } from "ng2-charts";

import * as data from "../../../../shared/data/chart/charts/chartjs";

@Component({
  selector: "app-chartjs-linechart",
  imports: [BaseChartDirective],
  templateUrl: "./chartjs-linechart.html",
  styleUrls: ["./chartjs-linechart.scss"],
})
export class ChartjsLinechart {
  public lineChartOptions = data.lineChartOptions;
  public lineChartLabels = data.lineChartLabels;
  public lineChartType = data.lineChartType;
  public lineChartLegend = data.lineChartLegend;
  public lineChartData = data.lineChartData;
}
