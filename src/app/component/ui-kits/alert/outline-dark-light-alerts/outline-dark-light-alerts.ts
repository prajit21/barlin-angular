import { Component } from '@angular/core';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-outline-dark-light-alerts',
  imports: [FeatherIcon, NgbAlertModule],
  templateUrl: './outline-dark-light-alerts.html',
  styleUrls: ['./outline-dark-light-alerts.scss'],
})
export class OutlineDarkLightAlerts {
  public isPrimary = true;
  public isSuccess = true;
  public iswarning = true;
  public isDanger = true;
}
