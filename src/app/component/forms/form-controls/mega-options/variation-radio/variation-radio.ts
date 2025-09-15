import { Component } from "@angular/core";

import * as data from "../../../../../shared/data/data/forms/forms-controls";

@Component({
  selector: "app-variation-radio",
  imports: [],
  templateUrl: "./variation-radio.html",
  styleUrls: ["./variation-radio.scss"],
})
export class VariationRadio {
  public variationRadioPayment = data.variationRadioPaymentData;
  public variationRadioDesign = data.variationRadioDesign;
  public variationRadioIcon = data.variationRadioIcon;
}
