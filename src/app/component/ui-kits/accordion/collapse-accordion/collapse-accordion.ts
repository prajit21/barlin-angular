import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse-accordion',
  imports: [NgbAccordionModule],
  templateUrl: './collapse-accordion.html',
  styleUrls: ['./collapse-accordion.scss'],
})
export class CollapseAccordion {}
