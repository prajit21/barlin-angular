import { Component } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-buttons-with-dropdowns",
  imports: [NgbDropdownModule],
  templateUrl: "./buttons-with-dropdowns.html",
  styleUrls: ["./buttons-with-dropdowns.scss"],
})
export class ButtonsWithDropdowns {
  public isShow: boolean = false;
  public isShow1: boolean = false;
  public isShow2: boolean = false;
  public isShow3: boolean = false;
}
