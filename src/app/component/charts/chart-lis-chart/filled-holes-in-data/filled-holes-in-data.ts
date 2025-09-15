import { Component } from "@angular/core";

import { ChartistModule } from "ng-chartist";

import { chart12 } from "../../../../shared/data/chart/charts/chartlist";

@Component({
  selector: "app-filled-holes-in-data",
  imports: [ChartistModule],
  templateUrl: "./filled-holes-in-data.html",
  styleUrls: ["./filled-holes-in-data.scss"],
})
export class FilledHolesInData {
  public chart12 = chart12;
}
