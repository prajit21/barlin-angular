import { Component } from '@angular/core';

import { defaultButtons, styleButton } from '../../../shared/data/data/buttons/default-style';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.html',
  styleUrls: ['./default-style.scss'],
  imports: [],
})
export class DefaultStyle {
  public defaultStyleData = defaultButtons;
  public styleButtonData = styleButton;
}
