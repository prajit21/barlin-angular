import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { orderStatusProcesses } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-order-status-processes",
  imports: [NgApexchartsModule],
  templateUrl: "./order-status-processes.html",
  styleUrls: ["./order-status-processes.scss"],
})
export class OrderStatusProcesses {
  public orderStatusProcesses = orderStatusProcesses;
}
