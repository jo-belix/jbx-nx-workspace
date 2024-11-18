import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  computed,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '@jbx-account/domain';
import { AccountStateService } from '../../account-state.service';

@Component({
  selector: 'lib-account-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-detail-page.component.html',
  styleUrl: './account-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailPageComponent implements OnInit {
  protected readonly accountStateService = inject(AccountStateService);

  @Input({ required: true }) id!: number;

  // Get the account with the given id from the accountStateService
  protected account!: Signal<Account | null>;

  constructor() {
    this.accountStateService.loadAccounts();
  }

  ngOnInit(): void {
    this.account = computed(
      () =>
        this.accountStateService
          .accounts()
          ?.find((account) => account.id == this.id) ?? null
    );
  }
}
