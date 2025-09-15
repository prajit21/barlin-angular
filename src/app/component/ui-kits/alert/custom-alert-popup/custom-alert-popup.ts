import { Component } from "@angular/core";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";

@Component({
  selector: "app-custom-alert-popup",
  imports: [CommonSvgIcons],
  templateUrl: "./custom-alert-popup.html",
  styleUrl: "./custom-alert-popup.scss",
})
export class CustomAlertPopup {
  public isShow: boolean = true;
}
