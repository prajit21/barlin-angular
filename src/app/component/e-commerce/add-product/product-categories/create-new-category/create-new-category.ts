import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-new-category",
  imports: [AngularEditorModule, FormsModule],
  templateUrl: "./create-new-category.html",
  styleUrls: ["./create-new-category.scss"],
})
export class CreateNewCategory {
  public htmlContent = "";

  public modal = inject(NgbModal);

  close() {
    this.modal.dismissAll();
  }
}
