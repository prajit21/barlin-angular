import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { iconsWithAlerts } from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-icons-with-alerts',
  imports: [NgbAlertModule, FeatherIcon, CommonModule],
  templateUrl: './icons-with-alerts.html',
  styleUrl: './icons-with-alerts.scss',
})
export class IconsWithAlerts {
  public iconsWithAlerts = iconsWithAlerts;
}
