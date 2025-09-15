import { Component } from "@angular/core";

import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";

@Component({
  selector: "app-response",
  imports: [CommonSvgIcons, NgbProgressbarModule],
  templateUrl: "./response.html",
  styleUrl: "./response.scss",
})
export class Response {}
