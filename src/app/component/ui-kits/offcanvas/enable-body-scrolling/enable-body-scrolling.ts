import { Component, inject, TemplateRef } from '@angular/core';

import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-enable-body-scrolling',
  imports: [NgbOffcanvasModule],
  templateUrl: './enable-body-scrolling.html',
  styleUrl: './enable-body-scrolling.scss',
})
export class EnableBodyScrolling {
  private offcanvasService = inject(NgbOffcanvas);

  bodyscroll(content: TemplateRef<unknown>) {
    this.offcanvasService.open(content, { position: 'start' });
  }
}
