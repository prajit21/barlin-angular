import { CommonModule, ViewportScroller } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";

import { FeatherIcon } from "../feather-icon/feather-icon";

@Component({
  selector: "app-tap-top",
  imports: [FeatherIcon, CommonModule],
  templateUrl: "./tap-top.html",
  styleUrl: "./tap-top.scss",
})
export class TapTop {
  public show: boolean = false;

  private viewScroller = inject(ViewportScroller);

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
