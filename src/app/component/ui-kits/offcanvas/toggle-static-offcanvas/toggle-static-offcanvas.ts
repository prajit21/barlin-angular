import { Component, inject, TemplateRef } from '@angular/core';

import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-static-offcanvas',
  imports: [NgbOffcanvasModule],
  templateUrl: './toggle-static-offcanvas.html',
  styleUrl: './toggle-static-offcanvas.scss',
})
export class ToggleStaticOffcanvas {
  private offcanvasService = inject(NgbOffcanvas);

  openleft(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: 'start' });
  }
}
