import { Component } from "@angular/core";

import { ChartjsBarChart } from "./chartjs-bar-chart/chartjs-bar-chart";
import { ChartjsLinechart } from "./chartjs-linechart/chartjs-linechart";
import { DoughnutChart } from "./doughnut-chart/doughnut-chart";
import { LineGraph } from "./line-graph/line-graph";
import { PolarChart } from "./polar-chart/polar-chart";
import { RadarGraph } from "./radar-graph/radar-graph";

@Component({
  selector: "app-chart-js-chart",
  imports: [
    ChartjsBarChart,
    ChartjsLinechart,
    RadarGraph,
    DoughnutChart,
    LineGraph,
    PolarChart,
  ],
  templateUrl: "./chart-js-chart.html",
  styleUrls: ["./chart-js-chart.scss"],
})
export class ChartJSChart {}
