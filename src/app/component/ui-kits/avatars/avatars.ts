import { Component } from '@angular/core';

import { AnimatedAvatar } from './animated-avatar/animated-avatar';
import { BadgeIndicator } from './badge-indicator/badge-indicator';
import { CommonAvatars } from './common-avatars/common-avatars';
import { Grouping } from './grouping/grouping';
import { InitialLetterAvatar } from './initial-letter-avatar/initial-letter-avatar';
import * as data from '../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-avatars',
  imports: [CommonAvatars, Grouping, BadgeIndicator, InitialLetterAvatar, AnimatedAvatar],
  templateUrl: './avatars.html',
  styleUrls: ['./avatars.scss'],
})
export class Avatars {
  public sizingData = data.sizesAvtarData;
  public statusIndicatorData = data.statusIndicatorData;
  public shapeData = data.shapeData;
  public ratioData = data.ratioData;
  public badgeIndicator = data.badgeIndicator;
}
