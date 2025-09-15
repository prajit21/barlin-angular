import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-simple-tabs",
  imports: [NgbNavModule],
  templateUrl: "./simple-tabs.html",
  styleUrls: ["./simple-tabs.scss"],
})
export class SimpleTabs {
  public active = 2;
}
