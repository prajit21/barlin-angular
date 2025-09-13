import { Routes } from '@angular/router';

import { Todo } from './todo';

export default [
  {
    path: '',
    component: Todo,
    data: {
      title: 'To-Do',
      breadcrumb: 'To-Do',
    },
  },
] as Routes;
