import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-contact",
  imports: [],
  templateUrl: "./add-contact.html",
  styleUrl: "./add-contact.scss",
})
export class AddContact {
  public modal = inject(NgbModal);
}
