import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationManager } from '../services/authentication-manager.service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const authenticationManager = inject(AuthenticationManager);
  const authenticatedUser = authenticationManager.authenticatedUser();

  if (authenticatedUser) {
    const reqWithUserId = req.clone({
      headers: req.headers.set('X-User-Id', authenticatedUser.id)
    });
    return next(reqWithUserId);
  }

  return next(req);
};
