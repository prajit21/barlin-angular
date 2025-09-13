import { Component } from '@angular/core';

import { AspectRatios } from './aspect-ratios/aspect-ratios';
import { CustomRatio } from './custom-ratio/custom-ratio';
import { DefaultRatio } from './default-ratio/default-ratio';

@Component({
  selector: 'app-ratios',
  imports: [CustomRatio, AspectRatios, DefaultRatio],
  templateUrl: './ratios.html',
  styleUrl: './ratios.scss',
})
export class Ratios {}
