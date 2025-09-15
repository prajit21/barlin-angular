import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LayoutService } from "../../../service/layout.service";

@Component({
  selector: "app-color-layout",
  imports: [FormsModule],
  templateUrl: "./color-layout.html",
  styleUrl: "./color-layout.scss",
})
export class ColorLayout {
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
    localStorage.getItem("primary_color") ||
      this.layoutService.config.color.primary_color;
    localStorage.getItem("secondary_color") ||
      this.layoutService.config.color.secondary_color;
  }

  applyColor() {
    this.layoutService.config.color.secondary_color = this.primary_color;
    this.layoutService.config.color.secondary_color = this.secondary_color;
    document.documentElement.style.setProperty(
      "--theme-default",
      this.layoutService.config.color.primary_color,
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      this.layoutService.config.color.secondary_color,
    );
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-default", "#2A5699");
    document.documentElement.style.setProperty("--theme-secondary", "#EA6F4E");
    localStorage.setItem("primary_color", "#2A5699");
    localStorage.setItem("secondary_color", "#EA6F4E");
    window.location.reload();
  }
}
