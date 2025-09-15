import { Component, HostListener, inject } from "@angular/core";

import { HideScrollNavService } from "../../../shared/service/hidescrollnav.service";

@Component({
  selector: "app-hide-scroll-nav",
  imports: [],
  templateUrl: "./hide-scroll-nav.html",
  styleUrls: ["./hide-scroll-nav.scss"],
})
export class HideScrollNav {
  public hideScrollNavService = inject(HideScrollNavService);

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 252) {
      this.hideScrollNavService.headerFixed = true;
    } else {
      this.hideScrollNavService.headerFixed = false;
    }
  }
}
