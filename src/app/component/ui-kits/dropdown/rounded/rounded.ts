import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded',
  imports: [NgbDropdownModule],
  templateUrl: './rounded.html',
  styleUrls: ['./rounded.scss'],
})
export class Rounded {
  public roundedDropdownData = Data.roundedDropdownData;
}
