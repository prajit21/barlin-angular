import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { cryptoAnotation } from "../../../../shared/data/chart/widgets";

@Component({
  selector: "app-crypto-annotations",
  imports: [NgApexchartsModule],
  templateUrl: "./crypto-annotations.html",
  styleUrls: ["./crypto-annotations.scss"],
})
export class CryptoAnnotations {
  public cryptoAnotation = cryptoAnotation;
}
