import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { chartWidget4 } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-monthly-history",
  imports: [NgApexchartsModule],
  templateUrl: "./monthly-history.html",
  styleUrls: ["./monthly-history.scss"],
})
export class MonthlyHistory {
  public chartWidget4 = chartWidget4;
}
