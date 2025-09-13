import { Routes } from '@angular/router';

import { ButtonGroup } from './button-group/button-group';
import { DefaultStyle } from './default-style/default-style';

export default [
  {
    path: 'default-style',
    component: DefaultStyle,
    data: {
      title: 'Default Style',
      breadcrumb: 'Default Style',
    },
  },
  {
    path: 'button-group',
    component: ButtonGroup,
    data: {
      title: 'Button Group',
      breadcrumb: 'Button Group',
    },
  },
] as Routes;
