import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import { ordersCountries } from "../../../../shared/data/data/dashboard";

@Component({
  selector: "app-orders-countries",
  imports: [CommonModule, FeatherIcon, Dropdown, RouterModule],
  templateUrl: "./orders-countries.html",
  styleUrl: "./orders-countries.scss",
})
export class OrdersCountries {
  public ordersCountries = ordersCountries;
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
}
