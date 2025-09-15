import { Component } from "@angular/core";

import { CommonSvgIcons } from "../common-svg-icons/common-svg-icons";

@Component({
  selector: "app-footer",
  imports: [CommonSvgIcons],
  templateUrl: "./footer.html",
  styleUrl: "./footer.scss",
})
export class Footer {
  public year = new Date().getFullYear();
}
