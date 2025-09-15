import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { goal } from "../../../../shared/data/chart/dashboard";

@Component({
  selector: "app-goal-summary",
  imports: [Dropdown, NgApexchartsModule],
  templateUrl: "./goal-summary.html",
  styleUrl: "./goal-summary.scss",
})
export class GoalSummary {
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public goal = goal;
}
