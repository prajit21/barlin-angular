import { Component, inject } from '@angular/core';

import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import { questionData } from '../../../shared/data/data/faq';

@Component({
  selector: 'app-questions',
  imports: [FeatherIcon, NgbAccordionModule],
  templateUrl: './questions.html',
  styleUrls: ['./questions.scss'],
})
export class Questions {
  public config = inject(NgbAccordionConfig);

  public questionData = questionData;

  constructor() {
    this.config.closeOthers = true;
  }
}
