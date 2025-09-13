import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-dismissing-light-alert',
  imports: [FeatherIcon],
  templateUrl: './dismissing-light-alert.html',
  styleUrls: ['./dismissing-light-alert.scss'],
})
export class DismissingLightAlert {
  public isShow: boolean = true;
}
