import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonSvgIcons } from "../../common-svg-icons/common-svg-icons";
import { FeatherIcon } from "../../feather-icon/feather-icon";

@Component({
  selector: "app-cart",
  imports: [FeatherIcon, CommonSvgIcons, RouterModule],
  templateUrl: "./cart.html",
  styleUrl: "./cart.scss",
})
export class Cart {
  public isOpen: boolean = false;
}
