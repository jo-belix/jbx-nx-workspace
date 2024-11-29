import { inject, Injectable, signal} from '@angular/core';
import { AccountDto, AccountHttpClient } from '@jbx-account/http-client';

@Injectable({
  providedIn: 'root',
})
export class AccountDtoStore {
  private readonly accountHttpClient = inject(AccountHttpClient);

  public readonly isLoading = signal<boolean>(false);
  public readonly isLoaded = signal<boolean>(false);
  public readonly accountDtos = signal<AccountDto[] | null>(null);

  public loadAccounts(): void {
    if (!this.isLoaded() && !this.isLoading()) {
      this.isLoading.set(true);
      this.accountHttpClient.getAccounts().subscribe((accountDtos) => {
        this.accountDtos.set(accountDtos);
        this.isLoaded.set(true);
        this.isLoading.set(false);
      });
    }
  }

  public updateAccount(accountDto: AccountDto): void {
    this.accountHttpClient.putAccount(accountDto).subscribe((accountDto) => {
      this.accountDtos.set(
        this.accountDtos()?.map((a) => {
          return accountDto.id === a.id ? accountDto : a;
        }) ?? null
      );
    });
  }

  public createAccount(accountDto: AccountDto): void {
    this.accountHttpClient.postAccount(accountDto).subscribe((accountDto) => {
      this.accountDtos.set(this.accountDtos()?.concat(accountDto) ?? null);
    });
  }

  public deleteAccount(accountId: number): void {
    this.accountHttpClient.deleteAccount(accountId).subscribe(() => {
      this.accountDtos.set(
        this.accountDtos()?.filter(
          (accountDto) => accountDto.id !== accountId
        ) ?? null
      );
    });
  }
}
