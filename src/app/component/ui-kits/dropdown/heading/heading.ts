import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading',
  imports: [NgbDropdownModule],
  templateUrl: './heading.html',
  styleUrls: ['./heading.scss'],
})
export class Heading {}
