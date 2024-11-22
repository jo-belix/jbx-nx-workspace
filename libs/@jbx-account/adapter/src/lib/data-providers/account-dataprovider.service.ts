import { computed, inject, Injectable, signal } from '@angular/core';
import { Account, IAccountDataProvider } from '@jbx-account/domain';
import { AccountDto, AccountHttpClient } from '@jbx-account/http-client';
import { map, Observable } from 'rxjs';
import { AccountMapper } from '../mappers/account-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class AccountDataprovider implements IAccountDataProvider {
  private readonly accountHttpClient = inject(AccountHttpClient);
  private readonly accountMapper = inject(AccountMapper);

  private readonly accountDtos = signal<AccountDto[] | null>(null);

  public accounts = computed(() => {
    return (
      this.accountDtos()?.map((accountDto) => {
        return this.accountMapper.mapAccountDtoToAccount(accountDto);
      }) ?? null
    );
  });

  public loadAccounts(): void {
    this.accountHttpClient.getAccounts().subscribe((accountDtos) => {
      this.accountDtos.set(accountDtos);
    });
  }

  public updateAccount(account: Account): void {
    this.accountHttpClient
      .putAccount(this.accountMapper.mapAccountToAccountDto(account))
      .subscribe((accountDto) => {
        this.accountDtos.set(
          this.accountDtos()?.map((a) => {
            return accountDto.id === a.id ? accountDto : a;
          }) ?? null
        );
      });
  }

  public createAccount(account: Account): void {
    this.accountHttpClient
      .postAccount(this.accountMapper.mapAccountToAccountDto(account))
      .subscribe((accountDto) => {
        this.accountDtos.set(this.accountDtos()?.concat(accountDto) ?? null);
      });
  }

  public deleteAccount(accountId: number): void {
    this.accountHttpClient.deleteAccount(accountId).subscribe(() => {
      this.accountDtos.set(
        this.accountDtos()?.filter((accountDto) => accountDto.id !== accountId) ?? null
      );
    });
  }
}
