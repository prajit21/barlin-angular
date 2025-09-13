import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { animatedButtons } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-animated-buttons',
  imports: [CommonModule],
  templateUrl: './animated-buttons.html',
  styleUrls: ['./animated-buttons.scss'],
})
export class AnimatedButtons {
  public animatedButtons = animatedButtons;
}
