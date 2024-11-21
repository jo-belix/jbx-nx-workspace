import { inject, Injectable } from '@angular/core';
import { Account, IAccountDataProvider } from '@jbx-account/domain';
import { AccountHttpClient } from '@jbx-account/http-client';
import { map, Observable } from 'rxjs';
import { AccountMapper } from '../mappers/account-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class AccountDataprovider implements IAccountDataProvider {
  private readonly accountHttpClient = inject(AccountHttpClient);
  private readonly accountMapper = inject(AccountMapper);

  public getAccounts(): Observable<Account[]> {
    return this.accountHttpClient.getAccounts().pipe(
      map((accountDtos) => {
        return accountDtos.map((accountDto) => {
          return this.accountMapper.mapAccountDtoToAccount(accountDto);
        });
      })
    );
  }

  public updateAccount(account: Account): Observable<Account> {
    return this.accountHttpClient.putAccount(
      this.accountMapper.mapAccountToAccountDto(account)
    );
  }

  public createAccount(account: Account): Observable<Account> {
    return this.accountHttpClient.postAccount(
      this.accountMapper.mapAccountToAccountDto(account)
    );
  }
  
  public deleteAccount(accountId: number): Observable<void> {
    return this.accountHttpClient.deleteAccount(accountId);
  }
}
