import { Component, inject } from "@angular/core";

import {
  NgbCollapseModule,
  NgbRatingConfig,
  NgbRatingModule,
} from "@ng-bootstrap/ng-bootstrap";

import { upcomingCourse } from "../../../../shared/data/data/learning";

@Component({
  selector: "app-upcoming-courses",
  imports: [NgbCollapseModule, NgbRatingModule],
  templateUrl: "./upcoming-courses.html",
  styleUrls: ["./upcoming-courses.scss"],
})
export class UpcomingCourses {
  public config = inject(NgbRatingConfig);

  public upcomingCourse = upcomingCourse;

  public isCollapsed = false;

  constructor() {
    this.config.max = 5;
    this.config.readonly = true;
  }
}
