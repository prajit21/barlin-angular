import { Routes } from '@angular/router';

import { UserCards } from './user-cards/user-cards';
import { UserProfile } from './user-profile/user-profile';
import { UsersEdits } from './users-edits/users-edits';

export default [
  {
    path: 'users-profile',
    component: UserProfile,
    data: {
      title: 'User Profile',
      breadcrumb: 'User Profile',
    },
  },
  {
    path: 'edit-profile',
    component: UsersEdits,
    data: {
      title: 'Edit Profile',
      breadcrumb: 'Edit Profile',
    },
  },
  {
    path: 'users-cards',
    component: UserCards,
    data: {
      title: 'User Cards',
      breadcrumb: 'User Cards',
    },
  },
] as Routes;
