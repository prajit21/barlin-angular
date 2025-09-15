import { Routes } from "@angular/router";

import { DetailedCourse } from "./detailed-course/detailed-course";
import { LearningList } from "./learning-list/learning-list";

export default [
  {
    path: "learning-list",
    component: LearningList,
    data: {
      title: "Learning List",
      breadcrumb: "Learning List",
    },
  },
  {
    path: "detailed-course",
    component: DetailedCourse,
    data: {
      title: "Detailed Course",
      breadcrumb: "Detailed Course",
    },
  },
] as Routes;
