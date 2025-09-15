import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-edges-input-style",
  imports: [],
  templateUrl: "./edges-input-style.html",
  styleUrls: ["./edges-input-style.scss"],
})
export class EdgesInputStyle {
  private router = inject(Router);

  submit() {
    this.router.navigate(["/form-controls/base-inputs"]);
  }
}
