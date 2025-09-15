import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbDatepickerModule, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-your-experience",
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: "./your-experience.html",
  styleUrls: ["./your-experience.scss"],
})
export class YourExperience {
  public model: NgbDateStruct;
  public model2: NgbDateStruct;
}
