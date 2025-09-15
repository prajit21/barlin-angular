import { Component } from "@angular/core";

import { NgbPopoverModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-disabled-elements",
  imports: [NgbPopoverModule],
  templateUrl: "./disabled-elements.html",
  styleUrl: "./disabled-elements.scss",
})
export class DisabledElements {}
