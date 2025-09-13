import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-intro',
  imports: [NgbCollapseModule],
  templateUrl: './profile-intro.html',
  styleUrl: './profile-intro.scss',
})
export class ProfileIntro {
  public isCollapsed = false;
}
