import { Component } from "@angular/core";

import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-multiple-collapse-accordion",
  imports: [NgbAccordionModule],
  templateUrl: "./multiple-collapse-accordion.html",
  styleUrls: ["./multiple-collapse-accordion.scss"],
})
export class MultipleCollapseAccordion {
  public isPrimary: boolean = false;
  public isWarning: boolean = false;
}
