import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import * as Data from '../../../../shared/data/data/ui-kits/tab';

@Component({
  selector: 'app-justify-tabs',
  imports: [NgbNavModule],
  templateUrl: './justify-tabs.html',
  styleUrls: ['./justify-tabs.scss'],
})
export class JustifyTabs {
  public active = 2;
  public justifyTabData = Data.justifyTabData;
}
