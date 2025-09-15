import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import { comboChart } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-combo-chart",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./combo-chart.html",
  styleUrls: ["./combo-chart.scss"],
})
export class ComboChart {
  public comboChart = comboChart;
}
