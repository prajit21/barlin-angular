import { Component, HostListener, inject } from "@angular/core";

import { LayoutService } from "../../../service/layout.service";

@Component({
  selector: "app-sidebar-type",
  imports: [],
  templateUrl: "./sidebar-type.html",
  styleUrl: "./sidebar-type.scss",
})
export class SidebarType {
  public screenwidth = window.innerWidth;
  public sidebarType: string = "compact-wrapper";

  public layoutService = inject(LayoutService);

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.screenwidth = window.innerWidth;
  }

  customizeSidebarType(value: string) {
    if (this.screenwidth < 1200) {
      if (value == "horizontal-wrapper") {
        this.layoutService.config.settings.sidebar_type = "compact-wrapper";
      }
    } else {
      this.sidebarType = value;
      this.layoutService.config.settings.sidebar_type = value;
      this.layoutService.isOpen = false;
    }
  }
}
