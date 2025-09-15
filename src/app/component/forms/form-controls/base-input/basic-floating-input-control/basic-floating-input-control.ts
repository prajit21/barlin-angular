import { Component } from "@angular/core";

import { LayoutGroup } from "./layout-group/layout-group";

@Component({
  selector: "app-basic-floating-input-control",
  imports: [LayoutGroup],
  templateUrl: "./basic-floating-input-control.html",
  styleUrls: ["./basic-floating-input-control.scss"],
})
export class BasicFloatingInputControl {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}
