import { Component } from '@angular/core';

import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-additional-content',
  imports: [],
  templateUrl: './additional-content.html',
  styleUrls: ['./additional-content.scss'],
})
export class AdditionalContent {
  public additionalContentData = Data.additionalContentData;
}
