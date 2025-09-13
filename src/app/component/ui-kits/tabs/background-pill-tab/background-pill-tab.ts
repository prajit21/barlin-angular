import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-background-pill-tab',
  imports: [NgbNavModule],
  templateUrl: './background-pill-tab.html',
  styleUrl: './background-pill-tab.scss',
})
export class BackgroundPillTab {
  public active = 3;
}
