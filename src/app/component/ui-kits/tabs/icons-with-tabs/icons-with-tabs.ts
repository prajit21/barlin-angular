import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-icons-with-tabs",
  imports: [NgbNavModule],
  templateUrl: "./icons-with-tabs.html",
  styleUrls: ["./icons-with-tabs.scss"],
})
export class IconsWithTabs {
  public active = 1;
}
