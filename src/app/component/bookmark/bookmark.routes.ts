import { Routes } from '@angular/router';

import { Bookmark } from './bookmark';

export default [
  {
    path: '',
    component: Bookmark,
    data: {
      title: 'Bookmarks',
      breadcrumb: 'Bookmarks',
    },
  },
] as Routes;
