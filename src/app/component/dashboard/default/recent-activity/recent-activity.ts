import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";
import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { recentActivity } from "../../../../shared/data/data/dashboard";

@Component({
  selector: "app-recent-activity",
  imports: [Dropdown, CommonSvgIcons, CommonModule, RouterModule],
  templateUrl: "./recent-activity.html",
  styleUrl: "./recent-activity.scss",
})
export class RecentActivity {
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public recentActivity = recentActivity;
}
