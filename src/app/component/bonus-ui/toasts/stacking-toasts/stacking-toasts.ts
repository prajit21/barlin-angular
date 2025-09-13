import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import { stackingToastData } from '../../../../shared/data/data/bonus-ui/toastr';

@Component({
  selector: 'app-stacking-toasts',
  imports: [FeatherIcon],
  templateUrl: './stacking-toasts.html',
  styleUrls: ['./stacking-toasts.scss'],
})
export class StackingToasts {
  public stackingToastData = stackingToastData;
  public isShow: boolean = true;

  close(id: number) {
    this.stackingToastData.filter(data => {
      if (data.id === id) {
        return (data.show = false);
      }
      return;
    });
  }
}
