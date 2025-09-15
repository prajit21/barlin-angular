import { Component } from "@angular/core";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

import { wordTreeChart } from "../../../../shared/data/chart/charts/google-chart";

@Component({
  selector: "app-word-tree",
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./word-tree.html",
  styleUrls: ["./word-tree.scss"],
})
export class WordTree {
  public wordTreeChart = wordTreeChart;
}
