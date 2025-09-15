import { Component } from "@angular/core";

import { AdditionalContent } from "./additional-content/additional-content";
import { AlertsWithTextActions } from "./alerts-with-text-actions/alerts-with-text-actions";
import { CustomAlertPopup } from "./custom-alert-popup/custom-alert-popup";
import { DarkTheme } from "./dark-theme/dark-theme";
import { DismissingDarkAlert } from "./dismissing-dark-alert/dismissing-dark-alert";
import { DismissingLightAlert } from "./dismissing-light-alert/dismissing-light-alert";
import { IconsWithAlerts } from "./icons-with-alerts/icons-with-alerts";
import { LeftBorderAlert } from "./left-border-alert/left-border-alert";
import { LinkColorLightTheme } from "./link-color-light-theme/link-color-light-theme";
import { LiveAlert } from "./live-alert/live-alert";
import { OutlineDarkLightAlerts } from "./outline-dark-light-alerts/outline-dark-light-alerts";

@Component({
  selector: "app-alert",
  imports: [
    AdditionalContent,
    AlertsWithTextActions,
    DarkTheme,
    DismissingDarkAlert,
    DismissingLightAlert,
    LeftBorderAlert,
    LiveAlert,
    OutlineDarkLightAlerts,
    LinkColorLightTheme,
    CustomAlertPopup,
    IconsWithAlerts,
  ],
  templateUrl: "./alert.html",
  styleUrls: ["./alert.scss"],
})
export class Alert {}
