import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { imageWithCloseBadges } from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-image-with-close-badges',
  imports: [FeatherIcon],
  templateUrl: './image-with-close-badges.html',
  styleUrl: './image-with-close-badges.scss',
})
export class ImageWithCloseBadges {
  public imageWithCloseBadges = imageWithCloseBadges;
}
