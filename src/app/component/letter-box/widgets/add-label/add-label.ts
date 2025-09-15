import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-label",
  imports: [],
  templateUrl: "./add-label.html",
  styleUrl: "./add-label.scss",
})
export class AddLabel {
  public modalService = inject(NgbModal);
}
