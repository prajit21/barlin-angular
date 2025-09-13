import { Routes } from '@angular/router';

import { LetterBox } from './letter-box';

export default [
  {
    path: '',
    component: LetterBox,
    data: {
      title: 'Letter Box',
      breadcrumb: 'Letter Box',
    },
  },
] as Routes;
