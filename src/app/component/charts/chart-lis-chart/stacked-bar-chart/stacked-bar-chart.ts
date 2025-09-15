import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import { chart7 } from "../../../../shared/data/chart/charts/chartlist";

@Component({
  selector: "app-stacked-bar-chart",
  imports: [ChartistModule],
  templateUrl: "./stacked-bar-chart.html",
  styleUrls: ["./stacked-bar-chart.scss"],
})
export class StackedBarChart {
  public chart7 = chart7;
}
