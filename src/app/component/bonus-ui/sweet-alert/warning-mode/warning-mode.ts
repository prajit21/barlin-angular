import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-warning-mode",
  imports: [],
  templateUrl: "./warning-mode.html",
  styleUrls: ["./warning-mode.scss"],
})
export class WarningMode {
  AlertModule() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "warning",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
