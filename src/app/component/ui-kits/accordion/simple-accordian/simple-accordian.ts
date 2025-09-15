import { Component } from "@angular/core";

import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import * as Data from "../../../../shared/data/data/ui-kits/accordion";

@Component({
  selector: "app-simple-accordian",
  imports: [NgbAccordionModule, FeatherIcon],
  templateUrl: "./simple-accordian.html",
  styleUrls: ["./simple-accordian.scss"],
})
export class SimpleAccordian {
  public simpleAccordionData = Data.simpleAccordionData;
}
