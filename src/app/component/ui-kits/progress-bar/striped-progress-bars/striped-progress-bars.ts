import { Component } from '@angular/core';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-striped-progress-bars',
  imports: [NgbProgressbarModule],
  templateUrl: './striped-progress-bars.html',
  styleUrl: './striped-progress-bars.scss',
})
export class StripedProgressBars {}
