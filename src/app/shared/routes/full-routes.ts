import { Routes } from "@angular/router";

export const full: Routes = [
  {
    path: "ecommerce/invoice",
    loadChildren: () =>
      import("../../component/e-commerce/invoice/invoice.routes"),
  },
  {
    path: "coming-soon",
    loadChildren: () => import("../../pages/coming-soon/coming-soon.routes"),
  },
  {
    path: "error-page",
    loadChildren: () => import("../../pages/error-pages/error-pages.routes"),
  },
  {
    path: "authentication",
    loadChildren: () =>
      import("../../pages/authentication/authentication.routes"),
  },
];
