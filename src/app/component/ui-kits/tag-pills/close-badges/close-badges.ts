import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { closeBadges } from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-close-badges',
  imports: [CommonModule, FeatherIcon],
  templateUrl: './close-badges.html',
  styleUrl: './close-badges.scss',
})
export class CloseBadges {
  public closeBadges = closeBadges;
}
