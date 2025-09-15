import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";
import { onlineSales } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-online-sales",
  imports: [CommonSvgIcons, NgApexchartsModule],
  templateUrl: "./online-sales.html",
  styleUrl: "./online-sales.scss",
})
export class OnlineSales {
  public onlineSales = onlineSales;
}
