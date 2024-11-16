import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@jbx-account/ui').then(m => m.accountRoutes)
    }
];
