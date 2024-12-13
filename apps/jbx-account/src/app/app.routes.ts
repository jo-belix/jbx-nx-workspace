import { Route } from '@angular/router';
import { authenticationGuard } from '@jbx/security';
import { LoginPageComponent } from '../pages/login/page/login-page.component';
import { NotFoundPageComponent } from '../pages/not-found/page/not-found-page.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login/:routeToNavigate',
        component: LoginPageComponent
    },
    {
        path: '',
        canActivate: [authenticationGuard],
        loadChildren: () => import('@jbx-account/ui').then(m => m.accountRoutes)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
