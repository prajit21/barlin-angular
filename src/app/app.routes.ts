import { Routes } from '@angular/router';

import { AdminGuard } from './shared/guard/admin.guard';
import { full } from './shared/routes/full-routes';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/login/login').then(m => m.Login),
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./pages/authentication/register-simple/register-simple').then(m => m.RegisterSimple),
  },
  {
    path: 'auth/forget-password',
    loadComponent: () =>
      import('./pages/authentication/forget-password/forget-password').then(m => m.ForgetPassword),
  },
  {
    path: '',
    loadComponent: () => import('./shared/component/layout/content/content').then(m => m.Content),
    children: content,
    canActivate: [AdminGuard],
  },

  {
    path: '',
    loadComponent: () =>
      import('./shared/component/layout/full-content/full-content').then(m => m.FullContent),
    canActivate: [AdminGuard],
    children: full,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error-pages/error400/error400').then(m => m.Error400),
  },
];
