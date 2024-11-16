import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccountDto } from './dtos/account.dto';

@Injectable({
  providedIn: 'root',
})
export class AccountHttpClient {
  private readonly httpClient = inject(HttpClient);

  getAccounts() {
    return this.httpClient.get<AccountDto[]>(
      'http://localhost:3333/api/accounts'
    );
  }
}
