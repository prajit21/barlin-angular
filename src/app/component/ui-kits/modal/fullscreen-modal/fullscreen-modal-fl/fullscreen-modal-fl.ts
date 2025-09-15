import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../../../shared/component/feather-icon/feather-icon";
import * as data from "../../../../../shared/data/data/ui-kits/ui-modal";

@Component({
  selector: "app-fullscreen-modal-fl",
  imports: [FeatherIcon],
  templateUrl: "./fullscreen-modal-fl.html",
  styleUrls: ["./fullscreen-modal-fl.scss"],
})
export class FullscreenModalFl {
  public commonFullScreenData = data.commonFullScreenData;

  private modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
