import { Component, inject, TemplateRef } from "@angular/core";

import { NgbOffcanvas, NgbOffcanvasModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-right-offcanvas",
  imports: [NgbOffcanvasModule],
  templateUrl: "./right-offcanvas.html",
  styleUrl: "./right-offcanvas.scss",
})
export class RightOffcanvas {
  private offcanvasService = inject(NgbOffcanvas);

  openRight(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: "end" });
  }
}
