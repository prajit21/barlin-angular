import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { currentOrders } from "../../../../shared/data/data/dashboard";

@Component({
  selector: "app-current-orders",
  imports: [CommonModule, Dropdown, RouterModule],
  templateUrl: "./current-orders.html",
  styleUrl: "./current-orders.scss",
})
export class CurrentOrders {
  public currentOrders = currentOrders;
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
}
