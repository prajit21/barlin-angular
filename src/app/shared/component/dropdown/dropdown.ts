import { Component, input } from "@angular/core";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dropdown",
  imports: [NgbDropdownModule],
  templateUrl: "./dropdown.html",
  styleUrl: "./dropdown.scss",
})
export class Dropdown {
  readonly data = input<string[]>([]);
}
