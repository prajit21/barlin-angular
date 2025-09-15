import { Component } from "@angular/core";

import { NgbOffcanvasModule } from "@ng-bootstrap/ng-bootstrap";

import { BackdropWithScrolling } from "./backdrop-with-scrolling/backdrop-with-scrolling";
import { BottomOffcanvas } from "./bottom-offcanvas/bottom-offcanvas";
import { EnableBodyScrolling } from "./enable-body-scrolling/enable-body-scrolling";
import { LeftOffcanvas } from "./left-offcanvas/left-offcanvas";
import { RightOffcanvas } from "./right-offcanvas/right-offcanvas";
import { ToggleStaticOffcanvas } from "./toggle-static-offcanvas/toggle-static-offcanvas";
import { TopOffcanvas } from "./top-offcanvas/top-offcanvas";

@Component({
  selector: "app-offcanvas",
  imports: [
    NgbOffcanvasModule,
    TopOffcanvas,
    LeftOffcanvas,
    RightOffcanvas,
    BottomOffcanvas,
    EnableBodyScrolling,
    BackdropWithScrolling,
    ToggleStaticOffcanvas,
  ],
  templateUrl: "./offcanvas.html",
  styleUrl: "./offcanvas.scss",
})
export class Offcanvas {}
