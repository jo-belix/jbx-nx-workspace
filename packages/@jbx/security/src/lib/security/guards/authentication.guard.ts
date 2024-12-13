import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationManager } from '../services/authentication-manager.service';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const authenticationManager = inject(AuthenticationManager);
  const authenticatedUser = authenticationManager.authenticatedUser();

  if (!authenticatedUser) {
    const router = inject(Router);
    return router.navigate(['login',state.url]);
  }

  return true;
};
