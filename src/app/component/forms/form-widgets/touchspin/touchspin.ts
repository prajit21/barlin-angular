import { Component } from "@angular/core";

import { ButtonsWithPrefix } from "./buttons-with-prefix/buttons-with-prefix";
import { CommonTouchspin } from "./common-touchspin/common-touchspin";
import { IconsWithPrefix } from "./icons-with-prefix/icons-with-prefix";
import { RoundedTouchspin } from "./rounded-touchspin/rounded-touchspin";

@Component({
  selector: "app-touchspin",
  imports: [
    CommonTouchspin,
    ButtonsWithPrefix,
    IconsWithPrefix,
    RoundedTouchspin,
  ],
  templateUrl: "./touchspin.html",
  styleUrls: ["./touchspin.scss"],
})
export class Touchspin {}
