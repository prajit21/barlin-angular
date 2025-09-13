import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-basic',
  imports: [NgbDropdownModule],
  templateUrl: './basic.html',
  styleUrls: ['./basic.scss'],
})
export class Basic {
  public basicDropdownData = Data.basicDropdownData;
}
