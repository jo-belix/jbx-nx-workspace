import { computed, Injectable, signal } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationManager {
  private _authenticatedUser = signal<AuthenticatedUser | null>(null);
  public authenticatedUser = computed(() => this._authenticatedUser());

  public login(user: AuthenticatedUser): void {
    this._authenticatedUser.set(user);
  }

  public logout(): void {
    this._authenticatedUser.set(null);
  }
}
