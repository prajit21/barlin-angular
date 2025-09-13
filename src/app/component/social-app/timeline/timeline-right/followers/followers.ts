import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/data/social-app';

@Component({
  selector: 'app-followers',
  imports: [NgbCollapseModule],
  templateUrl: './followers.html',
  styleUrl: './followers.scss',
})
export class Followers {
  public isCollapsed = false;
  public Followers = data.Followers;
}
