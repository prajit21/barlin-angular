import { Component } from '@angular/core';

import { FeatherIcon } from '../../../../shared/component/feather-icon/feather-icon';
import * as Data from '../../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-badges-as-part-buttons',
  imports: [FeatherIcon],
  templateUrl: './badges-as-part-buttons.html',
  styleUrls: ['./badges-as-part-buttons.scss'],
})
export class BadgesAsPartButtons {
  public badgeButtonData = Data.badgeButtonData;
}
