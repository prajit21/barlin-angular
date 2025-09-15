import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import { pieChart2 } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-pie-chart2",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./pie-chart2.html",
  styleUrls: ["./pie-chart2.scss"],
})
export class PieChart2 {
  public pieChart2 = pieChart2;
}
