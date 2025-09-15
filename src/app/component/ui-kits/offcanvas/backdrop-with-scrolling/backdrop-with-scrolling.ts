import { Component, inject, TemplateRef } from "@angular/core";

import { NgbOffcanvas, NgbOffcanvasModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-backdrop-with-scrolling",
  imports: [NgbOffcanvasModule],
  templateUrl: "./backdrop-with-scrolling.html",
  styleUrl: "./backdrop-with-scrolling.scss",
})
export class BackdropWithScrolling {
  private offcanvasService = inject(NgbOffcanvas);

  backdrop(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: "start" });
  }
}
