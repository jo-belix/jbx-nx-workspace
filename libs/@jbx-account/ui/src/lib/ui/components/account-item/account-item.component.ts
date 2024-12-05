import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Account } from '@jbx-account/domain';

@Component({
  selector: 'lib-account-item',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './account-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountItemComponent {
  protected readonly account = input.required<Account | null>();
}
