import { Component } from "@angular/core";

import { BillingData } from "./billing-data/billing-data";
import { FormData } from "./form-data/form-data";

@Component({
  selector: "app-checkout",
  imports: [FormData, BillingData],
  templateUrl: "./checkout.html",
  styleUrls: ["./checkout.scss"],
})
export class Checkout {}
