import { Component } from '@angular/core';

import { BasicButtonGroup } from './basic-button-group/basic-button-group';
import { CheckboxButtonGroup } from './checkbox-button-group/checkbox-button-group';
import { EdgeButtonGroup } from './edge-button-group/edge-button-group';
import { FlatButtonGroup } from './flat-button-group/flat-button-group';
import { LargeButtonGroup } from './large-button-group/large-button-group';
import { LargeEdgesButtonGroup } from './large-edges-button-group/large-edges-button-group';
import { Nesting } from './nesting/nesting';
import { OutlineButtonGroup } from './outline-button-group/outline-button-group';
import { OutlineCustomButtonGroup } from './outline-custom-button-group/outline-custom-button-group';
import { OutlineCustomButtonGroup2 } from './outline-custom-button-group2/outline-custom-button-group2';
import { OutlineEdgesButton } from './outline-edges-button/outline-edges-button';
import { OutlineFlatButton } from './outline-flat-button/outline-flat-button';
import { RadioButtonGroup } from './radio-button-group/radio-button-group';
import { Vertical } from './vertical/vertical';

@Component({
  selector: 'app-button-group',
  imports: [
    BasicButtonGroup,
    EdgeButtonGroup,
    FlatButtonGroup,
    LargeButtonGroup,
    OutlineCustomButtonGroup,
    OutlineCustomButtonGroup2,
    OutlineEdgesButton,
    OutlineButtonGroup,
    OutlineFlatButton,
    RadioButtonGroup,
    CheckboxButtonGroup,
    Nesting,
    Vertical,
    LargeEdgesButtonGroup,
  ],
  templateUrl: './button-group.html',
  styleUrls: ['./button-group.scss'],
})
export class ButtonGroup {}
