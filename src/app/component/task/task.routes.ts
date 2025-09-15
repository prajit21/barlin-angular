import { Routes } from "@angular/router";

import { Task } from "./task";

export default [
  {
    path: "",
    component: Task,
    data: {
      title: "Tasks",
      breadcrumb: "Tasks",
    },
  },
] as Routes;
