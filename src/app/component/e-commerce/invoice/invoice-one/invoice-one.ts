import { Component } from "@angular/core";

import { NgxPrintModule } from "ngx-print";

@Component({
  selector: "app-invoice-one",
  imports: [NgxPrintModule],
  templateUrl: "./invoice-one.html",
  styleUrl: "./invoice-one.scss",
})
export class InvoiceOne {}
