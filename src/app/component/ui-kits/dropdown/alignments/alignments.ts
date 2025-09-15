import { Component } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/data/ui-kits/dropdown";

@Component({
  selector: "app-alignments",
  imports: [NgbDropdownModule],
  templateUrl: "./alignments.html",
  styleUrls: ["./alignments.scss"],
})
export class Alignments {
  public alignmentDropdownData = Data.alignmentDropdownData;
}
