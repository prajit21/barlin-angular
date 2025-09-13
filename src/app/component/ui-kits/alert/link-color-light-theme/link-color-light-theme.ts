import { Component } from '@angular/core';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { linkColorLightTheme } from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-link-color-light-theme',
  imports: [NgbAlertModule],
  templateUrl: './link-color-light-theme.html',
  styleUrl: './link-color-light-theme.scss',
})
export class LinkColorLightTheme {
  public linkColorLightTheme = linkColorLightTheme;
}
