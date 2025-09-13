import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider',
  imports: [NgbDropdownModule],
  templateUrl: './divider.html',
  styleUrls: ['./divider.scss'],
})
export class Divider {
  public dividerDropdownData = Data.dividerDropdownData;
}
