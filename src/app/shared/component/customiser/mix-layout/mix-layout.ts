import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../service/layout.service";

@Component({
  selector: "app-mix-layout",
  imports: [],
  templateUrl: "./mix-layout.html",
  styleUrl: "./mix-layout.scss",
})
export class MixLayout {
  public layoutType: string = "light";

  public layoutService = inject(LayoutService);

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layoutService.config.settings.mix_layout = val;
    document.body?.classList.remove("light", "dark-sidebar", "dark-only");
    if (val === "light") {
      document.body?.classList.add("light");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}
