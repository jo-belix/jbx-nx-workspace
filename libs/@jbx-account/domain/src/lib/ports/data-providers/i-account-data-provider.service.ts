import { Observable } from "rxjs";
import { Account } from "../../models/account.model";

export abstract class IAccountDataProvider {
  public abstract getAccounts(): Observable<Account[]>;

  public abstract updateAccount(account: Account): Observable<Account>;

  public abstract createAccount(account: Account): Observable<Account>;

  public abstract deleteAccount(accountId: number): Observable<void>;
}