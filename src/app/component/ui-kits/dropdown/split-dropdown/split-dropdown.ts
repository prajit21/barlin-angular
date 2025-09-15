import { Component } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/data/ui-kits/dropdown";

@Component({
  selector: "app-split-dropdown",
  imports: [NgbDropdownModule],
  templateUrl: "./split-dropdown.html",
  styleUrls: ["./split-dropdown.scss"],
})
export class SplitDropdown {
  public splitDropdownData = Data.splitDropdownData;
}
