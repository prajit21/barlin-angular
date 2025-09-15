import { Routes } from "@angular/router";

import { SocialApp } from "./social-app";

export default [
  {
    path: "",
    component: SocialApp,
    data: {
      title: "Social App",
      breadcrumb: "Social App",
    },
  },
] as Routes;
