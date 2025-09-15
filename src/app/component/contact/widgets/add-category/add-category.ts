import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-category",
  imports: [],
  templateUrl: "./add-category.html",
  styleUrl: "./add-category.scss",
})
export class AddCategory {
  public modal = inject(NgbModal);
}
