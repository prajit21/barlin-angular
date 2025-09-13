import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';

@Component({
  selector: 'app-message-toasts',
  imports: [FeatherIcon],
  templateUrl: './message-toasts.html',
  styleUrl: './message-toasts.scss',
})
export class MessageToasts {
  public isSuccess: boolean = false;
  public isWarning: boolean = false;
  public isError: boolean = false;
}
