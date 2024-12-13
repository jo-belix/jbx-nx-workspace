import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationManager } from '../services/authentication-manager.service';
import { authenticationGuard } from './authentication.guard';
import { AuthenticatedUser } from '../models/authenticated-user.model';

jest.mock('@angular/core', () => ({
  ...jest.requireActual('@angular/core'),
  inject: jest.fn()
}));

describe('authenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authenticationGuard(...guardParameters));

  let router: jest.Mocked<Router>;
  let authManager: jest.Mocked<AuthenticationManager>;

  beforeEach(() => {
    router = { navigateByUrl: jest.fn() } as unknown as jest.Mocked<Router>;
    authManager = { authenticatedUser: jest.fn() } as unknown as jest.Mocked<AuthenticationManager>;

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: router },
        { provide: AuthenticationManager, useValue: authManager }
      ]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true when user is authenticated', () => {
    authManager.authenticatedUser.mockReturnValue({ id: '123', name: 'John Doe', email: 'john.doe@example.com' } as AuthenticatedUser);
    const result = executeGuard({} as any, {} as any);
    expect(result).toBe(true);
  });

  it('should redirect to login and return false when user is not authenticated', () => {
    authManager.authenticatedUser.mockReturnValue(null);
    router.navigateByUrl.mockResolvedValue(false);
    
    const result = executeGuard({} as any, {} as any);
    
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    expect(result).toBeFalsy();
  });
});
