import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginForm } from "../widgets/common-login-form/common-login-form";

@Component({
  selector: "app-login-validation",
  imports: [CommonLoginForm, RouterModule],
  templateUrl: "./login-validation.html",
  styleUrl: "./login-validation.scss",
})
export class LoginValidation {}
