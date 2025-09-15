import { Component } from "@angular/core";

import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-horizontal-accordion",
  imports: [NgbAccordionModule],
  templateUrl: "./horizontal-accordion.html",
  styleUrls: ["./horizontal-accordion.scss"],
})
export class HorizontalAccordion {}
