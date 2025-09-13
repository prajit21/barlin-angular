import { Component } from '@angular/core';

import { BasicTooltip } from './basic-tooltip/basic-tooltip';
import { ColoredTooltip } from './colored-tooltip/colored-tooltip';
import { DisabledTooltip } from './disabled-tooltip/disabled-tooltip';
import { FilledTooltip } from './filled-tooltip/filled-tooltip';
import { HoverEffect } from './hover-effect/hover-effect';
import { LightTooltips } from './light-tooltips/light-tooltips';
import { OutlineSVGTooltips } from './outline-svgtooltips/outline-svgtooltips';
import { SVGTooltips } from './svg-tooltips/svg-tooltips';
import { TooltipDirections } from './tooltip-directions/tooltip-directions';

@Component({
  selector: 'app-tooltip',
  imports: [
    BasicTooltip,
    ColoredTooltip,
    FilledTooltip,
    HoverEffect,
    TooltipDirections,
    LightTooltips,
    DisabledTooltip,
    SVGTooltips,
    OutlineSVGTooltips,
  ],
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
})
export class Tooltip {}
