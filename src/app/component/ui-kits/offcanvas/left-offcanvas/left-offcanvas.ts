import { Component, inject, TemplateRef } from '@angular/core';

import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-left-offcanvas',
  imports: [NgbOffcanvasModule],
  templateUrl: './left-offcanvas.html',
  styleUrl: './left-offcanvas.scss',
})
export class LeftOffcanvas {
  private offcanvasService = inject(NgbOffcanvas);

  openleft(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: 'start' });
  }
}
