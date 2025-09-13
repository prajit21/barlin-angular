import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-contents',
  imports: [NgbDropdownModule],
  templateUrl: './justify-contents.html',
  styleUrls: ['./justify-contents.scss'],
})
export class JustifyContents {
  public justifyDropdownData = Data.justifyDropdownData;
}
