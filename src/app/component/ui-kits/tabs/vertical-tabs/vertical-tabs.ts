import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tabs',
  imports: [NgbNavModule],
  templateUrl: './vertical-tabs.html',
  styleUrls: ['./vertical-tabs.scss'],
})
export class VerticalTabs {
  public active = 'component';
}
