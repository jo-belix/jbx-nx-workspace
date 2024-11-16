import { inject, Injectable, signal } from '@angular/core';
import { Account } from '@jbx-account/domain';
import { AccountHttpClient } from '@jbx-account/http-client';

@Injectable({
  providedIn: 'root'
})
export class AccountStateService {


  private readonly accountHttpClient = inject(AccountHttpClient);
  public readonly accounts = signal<Account[] | null>(null);
  public loadAccounts(): void {
      this.accountHttpClient.getAccounts().subscribe((accounts) => {
          this.accounts.set(accounts);
      });
  }
}
