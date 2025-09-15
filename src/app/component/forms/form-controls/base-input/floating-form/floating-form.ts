import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-floating-form",
  imports: [],
  templateUrl: "./floating-form.html",
  styleUrls: ["./floating-form.scss"],
})
export class FloatingForm {
  private router = inject(Router);

  submit() {
    this.router.navigate(["/form-controls/base-inputs"]);
  }
}
