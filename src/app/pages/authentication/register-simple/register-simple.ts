import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonRegisterForm } from "../widgets/common-register-form/common-register-form";

@Component({
  selector: "app-register-simple",
  imports: [CommonRegisterForm, RouterModule],
  templateUrl: "./register-simple.html",
  styleUrl: "./register-simple.scss",
})
export class RegisterSimple {}
