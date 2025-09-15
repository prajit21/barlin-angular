import { Component, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-task",
  imports: [],
  templateUrl: "./add-task.html",
  styleUrl: "./add-task.scss",
})
export class AddTask {
  public modal = inject(NgbModal);
}
