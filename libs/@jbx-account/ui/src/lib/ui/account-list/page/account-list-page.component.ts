import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AccountListComponent } from '../components/account-list/account-list.component';
import { CommonModule } from '@angular/common';
import { AccountStateService } from '../../account-state.service';
import { Router } from '@angular/router';
import { Account } from '@jbx-account/domain';

@Component({
  selector: 'lib-accounting-list-page',
  standalone: true,
  imports: [CommonModule, AccountListComponent],
  templateUrl: './account-list-page.component.html',
  styleUrl: './account-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListPageComponent {

  protected readonly accountStateService = inject(AccountStateService);
 
  constructor(){
    this.accountStateService.loadAccounts();
  }

}
