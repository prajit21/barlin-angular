import { Component, inject } from "@angular/core";

import { LayoutService } from "../../../service/layout.service";

@Component({
  selector: "app-light-layout",
  imports: [],
  templateUrl: "./light-layout.html",
  styleUrl: "./light-layout.scss",
})
export class LightLayout {
  public layoutService = inject(LayoutService);

  public primary_color: string =
    localStorage.getItem("primary_color") || "#2A5699";
  public secondary_color: string =
    localStorage.getItem("secondary_color") || "#EA6F4E";

  constructor() {
    var primary =
      localStorage.getItem("primary_color") ||
      this.layoutService.config.color.primary_color;
    var secondary =
      localStorage.getItem("secondary_color") ||
      this.layoutService.config.color.secondary_color;
    this.layoutService.config.color.primary_color = primary;
    this.layoutService.config.color.secondary_color = secondary;
    document.documentElement.style.setProperty("--theme-default", primary);
    document.documentElement.style.setProperty("--theme-secondary", secondary);
    localStorage.getItem("primary_color") ||
      this.layoutService.config.color.primary_color;
    localStorage.getItem("secondary_color") ||
      this.layoutService.config.color.secondary_color;
  }

  customizeLightColorScheme(primary: string, secondary: string) {
    this.layoutService.config.color.primary_color = this.primary_color;
    this.layoutService.config.color.secondary_color = this.secondary_color;
    document.documentElement.style.setProperty("--theme-default", primary);
    document.documentElement.style.setProperty("--theme-secondary", secondary);
    localStorage.setItem("primary_color", primary || "#2A5699");
    localStorage.setItem("secondary_color", secondary || "#EA6F4E");
    localStorage.setItem("mode", "light");
    window.location.reload();
  }
}
