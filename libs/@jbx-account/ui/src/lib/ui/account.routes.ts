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
          import('./pages/account-list/page/account-list-page.component').then(
            (m) => m.AccountListPageComponent
          ),
      },
      {
        path: ':id/consultation',
        data: { isConsultation: true },
        loadComponent: () =>
          import('./pages/account-detail/page/account-detail-page.component').then(
            (m) => m.AccountDetailPageComponent
          ),
      },
      {
        path: ':id/edition',
        data: { isConsultation: false },
        loadComponent: () =>
          import('./pages/account-detail/page/account-detail-page.component').then(
            (m) => m.AccountDetailPageComponent
          ),
      },

    ],
  },
];
