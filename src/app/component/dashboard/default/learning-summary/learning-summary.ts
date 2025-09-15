import { Component, input } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { learningSummary } from "../../../../shared/data/chart/dashboard";

@Component({
  selector: "app-learning-summary",
  imports: [Dropdown, NgApexchartsModule],
  templateUrl: "./learning-summary.html",
  styleUrl: "./learning-summary.scss",
})
export class LearningSummary {
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public learningSummary = learningSummary;
  readonly height = input<boolean>();
}
