import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { usesChart } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-uses",
  imports: [NgApexchartsModule],
  templateUrl: "./uses.html",
  styleUrls: ["./uses.scss"],
})
export class Uses {
  public usesChart = usesChart;
}
