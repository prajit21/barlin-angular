import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-dropdown-sizing',
  imports: [NgbDropdownModule],
  templateUrl: './dropdown-sizing.html',
  styleUrls: ['./dropdown-sizing.scss'],
})
export class DropdownSizing {
  public sizingDropdownData = Data.sizingDropdownData;
}
