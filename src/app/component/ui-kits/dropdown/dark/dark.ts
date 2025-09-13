import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark',
  imports: [NgbDropdownModule],
  templateUrl: './dark.html',
  styleUrls: ['./dark.scss'],
})
export class Dark {}
