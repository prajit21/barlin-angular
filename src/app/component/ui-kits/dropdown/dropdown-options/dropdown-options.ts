import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-options',
  imports: [NgbDropdownModule],
  templateUrl: './dropdown-options.html',
  styleUrl: './dropdown-options.scss',
})
export class DropdownOptions {}
