import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { FeatherIcon } from '../../feather-icon/feather-icon';

@Component({
  selector: 'app-profile',
  imports: [FeatherIcon, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  public router = inject(Router);

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
