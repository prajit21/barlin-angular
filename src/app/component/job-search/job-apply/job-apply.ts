import { Component } from "@angular/core";

import { ApplyForm } from "./apply-form/apply-form";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-job-apply",
  imports: [ApplyForm, JobFilter],
  templateUrl: "./job-apply.html",
  styleUrls: ["./job-apply.scss"],
})
export class JobApply {}
