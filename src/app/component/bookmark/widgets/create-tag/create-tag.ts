import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-tag",
  imports: [],
  templateUrl: "./create-tag.html",
  styleUrl: "./create-tag.scss",
})
export class CreateTag {
  public modal = inject(NgbModal);
}
