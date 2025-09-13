import { Component } from '@angular/core';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-svg-tooltips',
  imports: [NgbTooltipModule, CommonSvgIcons],
  templateUrl: './svg-tooltips.html',
  styleUrl: './svg-tooltips.scss',
})
export class SVGTooltips {}
