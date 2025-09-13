import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  imports: [NgbAccordionModule, FeatherIcon],
  templateUrl: './outline-accordion.html',
  styleUrls: ['./outline-accordion.scss'],
})
export class OutlineAccordion {
  public simpleAccordionData = Data.simpleAccordionData;
}
