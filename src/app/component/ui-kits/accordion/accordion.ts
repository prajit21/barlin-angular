import { Component } from '@angular/core';

import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { FlushAccordion } from './flush-accordion/flush-accordion';
import { HorizontalAccordion } from './horizontal-accordion/horizontal-accordion';
import { MultipleCollapseAccordion } from './multiple-collapse-accordion/multiple-collapse-accordion';
import { OutlineAccordion } from './outline-accordion/outline-accordion';
import { SimpleAccordian } from './simple-accordian/simple-accordian';
import { WithIconsAccordion } from './with-icons-accordion/with-icons-accordion';

@Component({
  selector: 'app-accordion',
  imports: [
    CollapseAccordion,
    FlushAccordion,
    HorizontalAccordion,
    MultipleCollapseAccordion,
    OutlineAccordion,
    SimpleAccordian,
    WithIconsAccordion,
  ],
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.scss'],
})
export class Accordion {}
