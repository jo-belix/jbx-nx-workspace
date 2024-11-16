import { inject, Injectable } from '@angular/core';
import { Account } from '../../models/account.model';
import { BehaviorSubject } from 'rxjs';
import { AccountHttpClient } from '@jbx-account/http-client';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountHttpClientService = inject(AccountHttpClient);


  public accounts$ = new BehaviorSubject<Account[] | null>(null);

  public loadAccounts() {
    this.accountHttpClientService.getAccounts().subscribe(accounts => {
      this.accounts$.next(accounts);
    });
  }

}
