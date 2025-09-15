import { Component } from "@angular/core";

import { BasicModal } from "./basic-modal/basic-modal";
import { BerlinCustomModals } from "./berlin-custom-modals/berlin-custom-modals";
import { BetweenModals } from "./between-modals/between-modals";
import { CenteredModal } from "./centered-modal/centered-modal";
import { FullscreenModal } from "./fullscreen-modal/fullscreen-modal";
import { GridModal } from "./grid-modal/grid-modal";
import { ScrollingLongContentModal } from "./scrolling-long-content-modal/scrolling-long-content-modal";
import { SizesModal } from "./sizes-modal/sizes-modal";
import { StaticBackdrop } from "./static-backdrop/static-backdrop";

@Component({
  selector: "app-modal",
  imports: [
    BasicModal,
    BetweenModals,
    CenteredModal,
    BerlinCustomModals,
    SizesModal,
    StaticBackdrop,
    FullscreenModal,
    GridModal,
    ScrollingLongContentModal,
  ],
  templateUrl: "./modal.html",
  styleUrls: ["./modal.scss"],
})
export class Modal {}
