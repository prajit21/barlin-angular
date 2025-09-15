import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";
import { offlineSales } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-offline-sales",
  imports: [CommonSvgIcons, NgApexchartsModule],
  templateUrl: "./offline-sales.html",
  styleUrl: "./offline-sales.scss",
})
export class OfflineSales {
  public offlineData = offlineSales;
}
