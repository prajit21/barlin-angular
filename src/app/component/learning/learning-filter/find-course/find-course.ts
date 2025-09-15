import { Component } from "@angular/core";

import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import { findCourse } from "../../../../shared/data/data/learning";

@Component({
  selector: "app-find-course",
  imports: [FeatherIcon, NgbCollapseModule],
  templateUrl: "./find-course.html",
  styleUrls: ["./find-course.scss"],
})
export class FindCourse {
  public findCourse = findCourse;
  public isCollapsed = false;
}
