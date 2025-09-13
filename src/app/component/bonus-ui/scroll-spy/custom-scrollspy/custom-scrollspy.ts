import { Component } from '@angular/core';

import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonSvgIcons } from '../../../../shared/component/common-svg-icons/common-svg-icons';

@Component({
  selector: 'app-custom-scrollspy',
  imports: [NgbScrollSpyModule, CommonSvgIcons],
  templateUrl: './custom-scrollspy.html',
  styleUrl: './custom-scrollspy.scss',
})
export class CustomScrollspy {}
