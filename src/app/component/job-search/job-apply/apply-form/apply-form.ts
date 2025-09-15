import { Component } from "@angular/core";

import { PersonalDetails } from "./personal-details/personal-details";
import { UploadFiles } from "./upload-files/upload-files";
import { YourEducation } from "./your-education/your-education";
import { YourExperience } from "./your-experience/your-experience";

@Component({
  selector: "app-apply-form",
  imports: [PersonalDetails, YourEducation, YourExperience, UploadFiles],
  templateUrl: "./apply-form.html",
  styleUrls: ["./apply-form.scss"],
})
export class ApplyForm {}
