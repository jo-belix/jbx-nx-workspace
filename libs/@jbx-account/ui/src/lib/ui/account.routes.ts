import { Routes } from '@angular/router';

export const accountRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./account-root/account-root.component').then(
        (m) => m.AccountRootComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./account-list/page/account-list-page.component').then(
            (m) => m.AccountListPageComponent
          ),
      },
    ],
  },
];
