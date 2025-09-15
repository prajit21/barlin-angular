import { Component } from "@angular/core";

import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/data/ui-kits/accordion";

@Component({
  selector: "app-flush-accordion",
  imports: [NgbAccordionModule],
  templateUrl: "./flush-accordion.html",
  styleUrls: ["./flush-accordion.scss"],
})
export class FlushAccordion {
  public flushAccordionData = Data.flushAccordionData;
}
