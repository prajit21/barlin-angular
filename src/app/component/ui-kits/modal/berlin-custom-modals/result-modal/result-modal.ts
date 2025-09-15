import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-result-modal",
  imports: [],
  templateUrl: "./result-modal.html",
  styleUrls: ["./result-modal.scss"],
})
export class ResultModal {
  public modal = inject(NgbModal);
}
