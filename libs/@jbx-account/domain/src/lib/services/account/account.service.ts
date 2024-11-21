import { inject, Injectable, signal } from '@angular/core';
import { Account } from '../../models/account.model';
import { IAccountDataProvider } from '../../ports/data-providers/i-account-data-provider.service';

@Injectable()
export class AccountService {
  private readonly accountDataProvider = inject(IAccountDataProvider);

  public accounts = signal<Account[] | null>(null);

  public loadAccounts() {
    if (this.accounts() === null) {
      this.accountDataProvider.getAccounts().subscribe((accounts) => {
        this.accounts.set(accounts);
      });
    }
  }

  public updateAccount(account: Account): void {
    this.accountDataProvider.updateAccount(account).subscribe((account) => {
      if (this.accounts !== null) {
        this.accounts.set(
          this.accounts()!.map((a) => (a.id === account.id ? account : a))
        );
      }
    });
  }

  public createAccount(account: Account): void {
    this.accountDataProvider.createAccount(account).subscribe((account) => {
      if (this.accounts !== null) {
        this.accounts.set([...this.accounts()!, account]);
      }
    });
  }

  public deleteAccount(accountId: number): void {
    this.accountDataProvider.deleteAccount(accountId).subscribe(() => {
      if (this.accounts !== null) {
        this.accounts.set(this.accounts()!.filter((a) => a.id !== accountId));
      }
    });
  }

  public initializeNewAccount(): Account {
    return {
      id: 0,
      name: '',
    };
  }
}
