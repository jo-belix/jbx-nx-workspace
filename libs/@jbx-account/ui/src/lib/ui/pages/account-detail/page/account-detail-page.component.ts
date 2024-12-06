import {
  ChangeDetectionStrategy,
  Component,
  inject,
  computed,
  numberAttribute,
  input,
  booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account, AccountService } from '@jbx-account/domain';
import { AccountFormComponent } from '../components/account-form/account-form.component';
import {
  PageLayoutComponent,
} from '@jbx/cdk';
import { Router } from '@angular/router';
import { AccountHeaderComponent } from '../../../components/account-header/account-header.component';

@Component({
  selector: 'lib-account-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    PageLayoutComponent,
    AccountFormComponent,
    AccountHeaderComponent
  ],
  templateUrl: './account-detail-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailPageComponent {
  //implements OnInit {
  public id = input(0, { transform: numberAttribute });
  public isConsultation = input(true, { transform: booleanAttribute });

  protected readonly accountService = inject(AccountService);
  protected readonly router = inject(Router);

  protected account = computed(
    () =>
      this.accountService
        .accounts()
        ?.find((account) => account.id === this.id()) ??
      this.accountService.initializeNewAccount()
  );

  constructor() {
    this.accountService.loadAccounts();
  }

  protected onCreateAccount(account: Account): void {
    this.accountService.createAccount(account);
    this.navigateToAccountList();
  }

  protected onUpdateAccount(account: Account): void {
    this.accountService.updateAccount(account);
    this.navigateToAccountList();
  }

  protected onCancelForm(): void {
    this.navigateToAccountList();
  }
  protected onCloseForm(): void {
    this.navigateToAccountList();
  }

  private navigateToAccountList(): void {
    this.router.navigate(['/accounts']);
  }
}
