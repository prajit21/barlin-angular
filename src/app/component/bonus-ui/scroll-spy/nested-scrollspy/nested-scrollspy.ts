import { Component } from "@angular/core";

import { NgbScrollSpyModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";

@Component({
  selector: "app-nested-scrollspy",
  imports: [NgbScrollSpyModule, CommonSvgIcons],
  templateUrl: "./nested-scrollspy.html",
  styleUrl: "./nested-scrollspy.scss",
})
export class NestedScrollspy {}
