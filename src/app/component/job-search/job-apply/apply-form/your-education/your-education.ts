import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbDatepickerModule, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-your-education",
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: "./your-education.html",
  styleUrls: ["./your-education.scss"],
})
export class YourEducation {
  public model: NgbDateStruct;
  public model2: NgbDateStruct;
}
