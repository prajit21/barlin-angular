import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-step-progressbar',
  imports: [FeatherIcon, RouterModule],
  templateUrl: './step-progressbar.html',
  styleUrl: './step-progressbar.scss',
})
export class StepProgressbar {}
