import { Component } from "@angular/core";

import { AnimatedProgressBars } from "./animated-progress-bars/animated-progress-bars";
import { CustomHeightProgressBars } from "./custom-height-progress-bars/custom-height-progress-bars";
import { CustomProgressBars } from "./custom-progress-bars/custom-progress-bars";
import { InitialProgressBars } from "./initial-progress-bars/initial-progress-bars";
import { LargeProgressBars } from "./large-progress-bars/large-progress-bars";
import { MultipleBars } from "./multiple-bars/multiple-bars";
import { ProgressWithNumberSteps } from "./progress-with-number-steps/progress-with-number-steps";
import { SmallProgressBars } from "./small-progress-bars/small-progress-bars";
import { StepProgressbar } from "./step-progressbar/step-progressbar";
import { StripedProgressBars } from "./striped-progress-bars/striped-progress-bars";
import * as Data from "../../../shared/data/data/ui-kits/progres-bar";

@Component({
  selector: "app-progress-bar",
  imports: [
    InitialProgressBars,
    StripedProgressBars,
    AnimatedProgressBars,
    MultipleBars,
    ProgressWithNumberSteps,
    CustomProgressBars,
    SmallProgressBars,
    LargeProgressBars,
    CustomHeightProgressBars,
    StepProgressbar,
  ],
  templateUrl: "./progress-bar.html",
  styleUrls: ["./progress-bar.scss"],
})
export class ProgressBar {
  public stripedData = Data.stripedData;
  public stripedAnimatedData = Data.stripedAnimatedData;
}
