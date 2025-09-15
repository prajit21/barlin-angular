import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonLoginForm } from "../widgets/common-login-form/common-login-form";

@Component({
  selector: "app-login-bg-image",
  imports: [CommonLoginForm, RouterModule],
  templateUrl: "./login-bg-image.html",
  styleUrl: "./login-bg-image.scss",
})
export class LoginBgImage {}
