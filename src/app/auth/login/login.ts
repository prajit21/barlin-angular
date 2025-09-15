import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { FeatherIcon } from "../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-login",
  imports: [RouterModule, ReactiveFormsModule, FeatherIcon],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  public router = inject(Router);

  public isShow: boolean = false;
  public loginForm: FormGroup;

  constructor() {
    const userData = localStorage.getItem("user");
    if (userData?.length != null) {
      this.router.navigate(["/dashboard"]);
    }
    this.loginForm = new FormGroup({
      email: new FormControl("Test@gmail.com", [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl("test123", Validators.required),
    });
  }

  login() {
    if (
      this.loginForm.value["email"] == "Test@gmail.com" &&
      this.loginForm.value["password"] == "test123"
    ) {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
    }
  }
}
