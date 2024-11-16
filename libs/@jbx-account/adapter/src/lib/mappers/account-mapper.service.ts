import { Injectable } from '@angular/core';
import { Account } from '@jbx-account/domain';
import { AccountDto } from '@jbx-account/http-client';

@Injectable({
  providedIn: 'root',
})
export class AccountMapper {
  mapAccountDtoToAccount(accountDto: AccountDto): Account {
    return new Account(accountDto.id, accountDto.name);
  }
}
