import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginForm } from "../widgets/common-login-form/common-login-form";

@Component({
  selector: "app-login-sweetalert",
  imports: [CommonLoginForm, RouterModule],
  templateUrl: "./login-sweetalert.html",
  styleUrl: "./login-sweetalert.scss",
})
export class LoginSweetalert {}
