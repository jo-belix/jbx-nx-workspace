import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccountDto } from './dtos/account.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountHttpClient {
  private readonly httpClient = inject(HttpClient);

  public getAccounts(): Observable<AccountDto[]> {
    return this.httpClient.get<AccountDto[]>(
      'http://localhost:3333/api/accounts'
    );
  }

  public putAccount(account: AccountDto): Observable<AccountDto> {
    return this.httpClient.put<AccountDto>(
      `http://localhost:3333/api/accounts/${account.id}`,
      account
    );
  }

  public postAccount(account: AccountDto): Observable<AccountDto> {
    return this.httpClient.post<AccountDto>(
      'http://localhost:3333/api/accounts',
      account
    );
  }

  public deleteAccount(accountId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `http://localhost:3333/api/accounts/${accountId}`
    );
  }
}
