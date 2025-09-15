import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { currentActivity } from "../../../../shared/data/data/dashboard";

@Component({
  selector: "app-support-mailbox",
  imports: [Dropdown, CommonModule, RouterModule],
  templateUrl: "./support-mailbox.html",
  styleUrl: "./support-mailbox.scss",
})
export class SupportMailbox {
  public currentActivity = currentActivity;
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
}
