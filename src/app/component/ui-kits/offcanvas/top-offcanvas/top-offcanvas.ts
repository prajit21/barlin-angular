import { Component, inject, TemplateRef } from "@angular/core";

import { NgbOffcanvas, NgbOffcanvasModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-top-offcanvas",
  imports: [NgbOffcanvasModule],
  templateUrl: "./top-offcanvas.html",
  styleUrl: "./top-offcanvas.scss",
})
export class TopOffcanvas {
  private offcanvasService = inject(NgbOffcanvas);

  openTop(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: "top" });
  }
}
