import { Routes } from "@angular/router";

import { InvoiceFive } from "./invoice-five/invoice-five";
import { InvoiceFour } from "./invoice-four/invoice-four";
import { InvoiceOne } from "./invoice-one/invoice-one";
import { InvoiceThree } from "./invoice-three/invoice-three";
import { InvoiceTwo } from "./invoice-two/invoice-two";

export default [
  {
    path: "invoice-1",
    component: InvoiceOne,
  },
  {
    path: "invoice-2",
    component: InvoiceTwo,
  },
  {
    path: "invoice-3",
    component: InvoiceThree,
  },
  {
    path: "invoice-4",
    component: InvoiceFour,
  },
  {
    path: "invoice-5",
    component: InvoiceFive,
  },
] as Routes;
