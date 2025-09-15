import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Dropdown } from "../../../../shared/component/dropdown/dropdown";
import { topSellingProduct } from "../../../../shared/data/data/dashboard";

@Component({
  selector: "app-top-selling-products",
  imports: [Dropdown, CommonModule, RouterModule],
  templateUrl: "./top-selling-products.html",
  styleUrl: "./top-selling-products.scss",
})
export class TopSellingProducts {
  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public topSellingProduct = topSellingProduct;
}
