import { Routes } from "@angular/router";

import { Calendar } from "./calendar";

export default [
  {
    path: "",
    component: Calendar,
    data: {
      title: "Calender Basic",
      breadcrumb: "Calender",
    },
  },
] as Routes;
