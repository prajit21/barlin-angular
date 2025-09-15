import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import { pieChart3 } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-pie-chart3",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./pie-chart3.html",
  styleUrls: ["./pie-chart3.scss"],
})
export class PieChart3 {
  public pieChart3 = pieChart3;
}
