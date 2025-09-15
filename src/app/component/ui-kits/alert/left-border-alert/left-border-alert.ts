import { Component } from "@angular/core";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-left-border-alert",
  imports: [FeatherIcon],
  templateUrl: "./left-border-alert.html",
  styleUrls: ["./left-border-alert.scss"],
})
export class LeftBorderAlert {
  public isDark: boolean = true;
  public isSecondary: boolean = true;
  public isSuccess: boolean = true;
}
