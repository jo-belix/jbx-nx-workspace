import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AccountListComponent } from '../components/account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent, PrimaryButtonComponent } from '@jbx/cdk';
import { Router } from '@angular/router';
import { Account, AccountService } from '@jbx-account/domain';
import { AccountHeaderComponent } from '../../../components/account-header/account-header.component';

@Component({
  selector: 'lib-accounting-list-page',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, AccountListComponent, PrimaryButtonComponent],
  templateUrl: './account-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListPageComponent {
  protected readonly accountService = inject(AccountService);
  private readonly router = inject(Router);

  constructor() {
    this.accountService.loadAccounts();
  }

  protected onConsult(account: Account) : void {
    this.router.navigate(['accounts', account.id,'consultation']);
  }

  protected onUpdate(account: Account) : void {
    this.router.navigate(['accounts', account.id,'edition']);
  }

  protected onDelete(accountId: number) : void {
    this.accountService.deleteAccount(accountId);
  }

  protected onAddAccountButtonClick() : void {
    this.router.navigate(['accounts', '0','edition']);
  }
}
