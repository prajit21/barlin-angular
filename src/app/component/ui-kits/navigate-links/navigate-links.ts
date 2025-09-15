import { Component } from "@angular/core";

import { BackgroundColorOpacity } from "./background-color-opacity/background-color-opacity";
import { BorderOpacity } from "./border-opacity/border-opacity";
import { HoveredLinkOpacity } from "./hovered-link-opacity/hovered-link-opacity";
import { LinkOpacity } from "./link-opacity/link-opacity";
import { LinkUnderlines } from "./link-underlines/link-underlines";
import { LinkUtilities } from "./link-utilities/link-utilities";
import { UnderlineOffset } from "./underline-offset/underline-offset";
import { UnderlineOpacity } from "./underline-opacity/underline-opacity";

@Component({
  selector: "app-navigate-links",
  imports: [
    LinkUtilities,
    LinkUnderlines,
    BorderOpacity,
    BackgroundColorOpacity,
    LinkOpacity,
    HoveredLinkOpacity,
    UnderlineOpacity,
    UnderlineOffset,
  ],
  templateUrl: "./navigate-links.html",
  styleUrl: "./navigate-links.scss",
})
export class NavigateLinks {}
