import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-dismissing-dark-alert',
  imports: [FeatherIcon],
  templateUrl: './dismissing-dark-alert.html',
  styleUrls: ['./dismissing-dark-alert.scss'],
})
export class DismissingDarkAlert {
  public isShow: boolean = true;
}
