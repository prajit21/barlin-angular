import { Component } from '@angular/core';

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-multiple-bars',
  imports: [NgbProgressbarModule],
  templateUrl: './multiple-bars.html',
  styleUrl: './multiple-bars.scss',
})
export class MultipleBars {}
