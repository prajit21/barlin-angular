import { Routes } from '@angular/router';

import { AddPost } from './add-post/add-post';
import { BlogDetails } from './blog-details/blog-details';
import { BlogGrids } from './blog-grids/blog-grids';

export default [
  {
    path: 'blog-grids',
    component: BlogGrids,
    data: {
      title: 'Blog Grids',
      breadcrumb: 'Blog Grids',
    },
  },
  {
    path: 'blog-details',
    component: BlogDetails,
    data: {
      title: 'Blog Single',
      breadcrumb: 'Blog Single',
    },
  },
  {
    path: 'add-post',
    component: AddPost,
    data: {
      title: 'Add Post',
      breadcrumb: 'Add Post',
    },
  },
] as Routes;
