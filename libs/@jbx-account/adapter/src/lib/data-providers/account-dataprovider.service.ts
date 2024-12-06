import { computed, inject, Injectable } from '@angular/core';
import { Account, IAccountDataProvider } from '@jbx-account/domain';

import { AccountMapper } from '../mappers/account-mapper.service';
import { AccountDtoStore } from '../stores/account-dto-store.service';

@Injectable({
  providedIn: 'root',
})
export class AccountDataprovider implements IAccountDataProvider {
  private readonly accountMapper = inject(AccountMapper);
  private readonly accountDtoStore = inject(AccountDtoStore);

  public accounts = computed(() => {
    return (
      this.accountDtoStore.accountDtos()?.map((accountDto) => {
        return this.accountMapper.mapAccountDtoToAccount(accountDto);
      }) ?? null
    );
  });

  public loadAccounts(): void {
    this.accountDtoStore.loadAccounts();
  }

  public updateAccount(account: Account): void {
    this.accountDtoStore.updateAccount(
      this.accountMapper.mapAccountToAccountDto(account)
    );
  }

  public createAccount(account: Account): void {
    this.accountDtoStore.createAccount(
      this.accountMapper.mapAccountToAccountDto(account)
    );
  }

  public deleteAccount(accountId: number): void {
    this.accountDtoStore.deleteAccount(accountId);
  }
}
