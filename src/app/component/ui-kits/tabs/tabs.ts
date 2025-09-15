import { Component } from "@angular/core";

import { AnimatedHorizontalTabs } from "./animated-horizontal-tabs/animated-horizontal-tabs";
import { ArrowTabs } from "./arrow-tabs/arrow-tabs";
import { BackgroundPillTab } from "./background-pill-tab/background-pill-tab";
import { BorderTabs } from "./border-tabs/border-tabs";
import { BottomTabs } from "./bottom-tabs/bottom-tabs";
import { IconsWithTabs } from "./icons-with-tabs/icons-with-tabs";
import { JustifyTabs } from "./justify-tabs/justify-tabs";
import { MaterialStyleLeftTabs } from "./material-style-left-tabs/material-style-left-tabs";
import { MaterialStyleTabs } from "./material-style-tabs/material-style-tabs";
import { PillsTabs } from "./pills-tabs/pills-tabs";
import { SimpleTabs } from "./simple-tabs/simple-tabs";
import { VerticalTabs } from "./vertical-tabs/vertical-tabs";

@Component({
  selector: "app-tabs",
  imports: [
    BorderTabs,
    IconsWithTabs,
    JustifyTabs,
    MaterialStyleLeftTabs,
    MaterialStyleTabs,
    PillsTabs,
    SimpleTabs,
    VerticalTabs,
    BackgroundPillTab,
    ArrowTabs,
    AnimatedHorizontalTabs,
    BottomTabs,
  ],
  templateUrl: "./tabs.html",
  styleUrls: ["./tabs.scss"],
})
export class Tabs {}
