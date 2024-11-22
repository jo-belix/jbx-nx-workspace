import { inject, Injectable, signal } from '@angular/core';
import { Account } from '../../models/account.model';
import { IAccountDataProvider } from '../../ports/data-providers/i-account-data-provider.service';

@Injectable()
export class AccountService {
  private readonly accountDataProvider = inject(IAccountDataProvider);

  public accounts = this.accountDataProvider.accounts;

  public loadAccounts() {
    if (this.accounts() === null) {
      this.accountDataProvider.loadAccounts();
    }
  }

  public updateAccount(account: Account): void {
    this.accountDataProvider.updateAccount(account);
  }

  public createAccount(account: Account): void {
    this.accountDataProvider.createAccount(account);
  }

  public deleteAccount(accountId: number): void {
    this.accountDataProvider.deleteAccount(accountId);
  }

  public initializeNewAccount(): Account {
    return {
      id: 0,
      name: '',
    };
  }
}
