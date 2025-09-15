import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-large",
  imports: [FeatherIcon],
  templateUrl: "./large.html",
  styleUrls: ["./large.scss"],
})
export class Large {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
