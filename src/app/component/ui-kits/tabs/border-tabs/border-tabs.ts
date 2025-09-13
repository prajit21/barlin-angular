import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tabs',
  imports: [NgbNavModule],
  templateUrl: './border-tabs.html',
  styleUrls: ['./border-tabs.scss'],
})
export class BorderTabs {
  public active = 2;
}
