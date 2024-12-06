import { inject, Injectable, signal } from '@angular/core';
import { AccountDto, AccountHttpClient } from '@jbx-account/http-client';
import { catchError, EMPTY, tap } from 'rxjs';

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
      this.accountHttpClient
        .getAccounts()
        .pipe(
          tap((accountDtos) => {
            this.accountDtos.set(accountDtos);
            this.isLoaded.set(true);
            this.isLoading.set(false);
          }),
          catchError((error) => {
            console.error('Error loading accounts:', error);
            this.isLoading.set(false);
            return EMPTY;
          })
        )
        .subscribe();
    }
  }

  public updateAccount(accountDto: AccountDto): void {
    this.accountHttpClient
      .putAccount(accountDto)
      .pipe(
        tap((accountDto) => {
          this.accountDtos.set(
            this.accountDtos()?.map((a) => {
              return accountDto.id === a.id ? accountDto : a;
            }) ?? null
          );
        }),
        catchError((error) => {
          console.error('Error updating account:', error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  public createAccount(accountDto: AccountDto): void {
    this.accountHttpClient
      .postAccount(accountDto)
      .pipe(
        tap((accountDto) => {
        if (accountDto) {
            this.accountDtos.set(this.accountDtos()?.concat(accountDto) ?? null);
          }
        }),
        catchError((error) => {
          console.error('Error creating account:', error);
          return EMPTY;
        })
      )
      .subscribe();
  }

  public deleteAccount(accountId: number): void {
    this.accountHttpClient
      .deleteAccount(accountId)
      .pipe(
        tap(() => {
          this.accountDtos.set(
            this.accountDtos()?.filter(
              (accountDto) => accountDto.id !== accountId
            ) ?? null
          );
        }),
        catchError((error) => {
          console.error('Error deleting account:', error);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
