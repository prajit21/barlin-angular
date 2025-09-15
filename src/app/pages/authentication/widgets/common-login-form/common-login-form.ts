import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-common-login-form",
  imports: [FeatherIcon, RouterModule],
  templateUrl: "./common-login-form.html",
  styleUrl: "./common-login-form.scss",
})
export class CommonLoginForm {
  public isShow: boolean = false;
}
