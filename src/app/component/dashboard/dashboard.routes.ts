import { Routes } from '@angular/router';

import { Default } from './default/default';
import { Ecommerce } from './ecommerce/ecommerce';

export default [
  {
    path: 'default',
    component: Default,
    data: {
      title: 'Default dashboard',
      breadcrumb: 'Default',
    },
  },
  {
    path: 'ecommerce',
    component: Ecommerce,
    data: {
      title: 'Ecommerce Dashboard',
      breadcrumb: 'E-Commerce',
    },
  },
] as Routes;
