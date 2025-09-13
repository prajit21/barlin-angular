import { Component } from '@angular/core';

import { Animation } from './animation/animation';
import { Colors } from './colors/colors';
import { CustomAnimationPlaceholder } from './custom-animation-placeholder/custom-animation-placeholder';
import { PlaceholderCards } from './placeholder-cards/placeholder-cards';
import { WidthSizing } from './width-sizing/width-sizing';

@Component({
  selector: 'app-placeholder',
  imports: [PlaceholderCards, WidthSizing, Animation, CustomAnimationPlaceholder, Colors],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
})
export class Placeholder {}
