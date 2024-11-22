import { Account } from "../../models/account.model";
import { Signal } from "@angular/core";

export abstract class IAccountDataProvider {

  public abstract accounts: Signal<Account[] | null>;

  public abstract loadAccounts(): void;

  public abstract updateAccount(account: Account): void;

  public abstract createAccount(account: Account): void;

  public abstract deleteAccount(accountId: number): void;
}