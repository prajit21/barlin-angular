import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-helper-card',
  imports: [NgbDropdownModule],
  templateUrl: './helper-card.html',
  styleUrls: ['./helper-card.scss'],
})
export class HelperCard {
  public helperCardData = Data.helperCardData;
}
