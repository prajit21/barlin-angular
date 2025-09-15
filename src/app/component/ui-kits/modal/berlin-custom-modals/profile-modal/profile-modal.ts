import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonSvgIcons } from "../../../../../shared/component/common-svg-icons/common-svg-icons";

@Component({
  selector: "app-profile-modal",
  imports: [CommonSvgIcons, RouterModule],
  templateUrl: "./profile-modal.html",
  styleUrls: ["./profile-modal.scss"],
})
export class ProfileModal {}
