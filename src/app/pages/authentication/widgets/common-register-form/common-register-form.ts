import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-common-register-form",
  imports: [FeatherIcon, RouterModule],
  templateUrl: "./common-register-form.html",
  styleUrl: "./common-register-form.scss",
})
export class CommonRegisterForm {
  public isShow: boolean = false;
}
