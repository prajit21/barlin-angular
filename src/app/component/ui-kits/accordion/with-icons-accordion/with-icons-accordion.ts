import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-with-icons-accordion',
  imports: [NgbAccordionModule, FeatherIcon],
  templateUrl: './with-icons-accordion.html',
  styleUrls: ['./with-icons-accordion.scss'],
})
export class WithIconsAccordion {
  public accordionWithIconData = Data.accordionWithIconData;
}
