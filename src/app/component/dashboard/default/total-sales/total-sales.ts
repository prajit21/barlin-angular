import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { totalSales } from "../../../../shared/data/chart/dashboard";

@Component({
  selector: "app-total-sales",
  imports: [Dropdown, NgApexchartsModule],
  templateUrl: "./total-sales.html",
  styleUrl: "./total-sales.scss",
})
export class TotalSales {
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public totalSales = totalSales;
}
