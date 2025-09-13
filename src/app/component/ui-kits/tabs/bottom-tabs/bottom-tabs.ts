import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bottom-tabs',
  imports: [NgbNavModule],
  templateUrl: './bottom-tabs.html',
  styleUrl: './bottom-tabs.scss',
})
export class BottomTabs {
  public active = 2;
}
