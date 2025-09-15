import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../service/layout.service";

@Component({
  selector: "app-sidebar-icon",
  imports: [],
  templateUrl: "./sidebar-icon.html",
  styleUrl: "./sidebar-icon.scss",
})
export class SidebarIcon {
  public icon: string = "fill-svg";

  public layoutService = inject(LayoutService);

  svgIcon(val: string) {
    this.icon = val;
    this.layoutService.config.settings.icon = val;
    if (val == "fill-svg") {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    } else {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    }
  }
}
