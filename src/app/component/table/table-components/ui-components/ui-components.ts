import { Component } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-ui-components",
  imports: [NgbDropdownModule],
  templateUrl: "./ui-components.html",
  styleUrls: ["./ui-components.scss"],
})
export class UIComponents {
  public isOpen: boolean = false;
}
