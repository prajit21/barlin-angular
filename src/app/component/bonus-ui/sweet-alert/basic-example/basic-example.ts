import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-basic-example",
  imports: [],
  templateUrl: "./basic-example.html",
  styleUrls: ["./basic-example.scss"],
})
export class BasicExample {
  basicAlert() {
    Swal.fire({
      title: "Welcome! to the Berlin theme",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
