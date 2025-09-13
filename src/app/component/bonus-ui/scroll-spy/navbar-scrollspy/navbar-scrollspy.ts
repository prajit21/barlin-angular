import { Component } from '@angular/core';

import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-scrollspy',
  imports: [NgbScrollSpyModule, NgbDropdownModule],
  templateUrl: './navbar-scrollspy.html',
  styleUrl: './navbar-scrollspy.scss',
})
export class NavbarScrollspy {}
