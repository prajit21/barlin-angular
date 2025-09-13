import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-dark-theme',
  imports: [CommonModule, NgbAlertModule],
  templateUrl: './dark-theme.html',
  styleUrls: ['./dark-theme.scss'],
})
export class DarkTheme {
  public darkThemeAlertData = Data.darkThemeAlertData;
}
