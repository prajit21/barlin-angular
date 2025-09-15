import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-simple",
  imports: [FeatherIcon],
  templateUrl: "./simple.html",
  styleUrls: ["./simple.scss"],
})
export class Simple {
  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
