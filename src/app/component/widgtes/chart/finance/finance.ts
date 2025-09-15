import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { finance } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-finance",
  imports: [NgApexchartsModule],
  templateUrl: "./finance.html",
  styleUrls: ["./finance.scss"],
})
export class Finance {
  public finance = finance;
}
