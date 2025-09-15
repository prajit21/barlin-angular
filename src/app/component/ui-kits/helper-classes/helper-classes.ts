import { Component } from "@angular/core";

import { BorderColor } from "./border-color/border-color";
import { CommonBorder } from "./common-border/common-border";
import { CommonHelperClass } from "./common-helper-class/common-helper-class";
import { CommonMarginPadding } from "./common-margin-padding/common-margin-padding";
import { FontSizes } from "./font-sizes/font-sizes";
import { FontStyle } from "./font-style/font-style";
import { FontWidthHelper } from "./font-width-helper/font-width-helper";
import { ImagesSizes } from "./images-sizes/images-sizes";
import { Margin } from "./margin/margin";
import { Padding } from "./padding/padding";
import { TextColors } from "./text-colors/text-colors";
import * as data from "../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: "app-helper-classes",
  imports: [
    BorderColor,
    CommonHelperClass,
    CommonMarginPadding,
    FontSizes,
    FontStyle,
    FontWidthHelper,
    ImagesSizes,
    Margin,
    Padding,
    TextColors,
    CommonBorder,
  ],
  templateUrl: "./helper-classes.html",
  styleUrls: ["./helper-classes.scss"],
})
export class HelperClasses {
  public StyleBorderData = data.StyleBorderData;
  public BorderAndDisplayData = data.BorderAndDisplayData;
  public backgroundColorsData = data.backgroundColorsData;
  public SidePadding = data.SidePadding;
  public SideMargin = data.SideMargin;
  public dashedBorder = data.dashedBorder;
  public dottedBorder = data.dottedBorder;
  public grooveBorder = data.grooveBorder;
  public ridgeBorder = data.ridgeBorder;
}
