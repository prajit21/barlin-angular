import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-tooltip-form",
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./tooltip-form.html",
  styleUrls: ["./tooltip-form.scss"],
})
export class TooltipForm {
  public validate = false;
  public tooltipForm = new FormGroup({});

  public form() {
    if (!this.tooltipForm.valid) {
      this.validate = false;
    } else {
      this.validate = true;
    }
  }
}
