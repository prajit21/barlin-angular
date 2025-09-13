import { Component, inject, TemplateRef } from '@angular/core';

import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bottom-offcanvas',
  imports: [NgbOffcanvasModule],
  templateUrl: './bottom-offcanvas.html',
  styleUrl: './bottom-offcanvas.scss',
})
export class BottomOffcanvas {
  private offcanvasService = inject(NgbOffcanvas);

  openBottom(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: 'bottom' });
  }
}
