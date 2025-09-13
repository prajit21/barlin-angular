import { Component } from '@angular/core';

import { AnimatedRibbons } from './animated-ribbons/animated-ribbons';
import { LeftRibbons } from './left-ribbons/left-ribbons';
import { RightRibbons } from './right-ribbons/right-ribbons';

@Component({
  selector: 'app-ribbons',
  imports: [LeftRibbons, RightRibbons, AnimatedRibbons],
  templateUrl: './ribbons.html',
  styleUrls: ['./ribbons.scss'],
})
export class Ribbons {}
