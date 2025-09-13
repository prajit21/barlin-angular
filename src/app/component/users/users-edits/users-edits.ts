import { Component } from '@angular/core';

import { AddUpdateProjects } from './add-update-projects/add-update-projects';
import { EditProfile } from './edit-profile/edit-profile';
import { MyProfiles } from './my-profiles/my-profiles';

@Component({
  selector: 'app-users-edits',
  imports: [AddUpdateProjects, EditProfile, MyProfiles],
  templateUrl: './users-edits.html',
  styleUrls: ['./users-edits.scss'],
})
export class UsersEdits {}
