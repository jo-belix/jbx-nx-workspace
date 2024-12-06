import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '@jbx-account/domain';

@Component({
  selector: 'lib-account-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountHeaderComponent {
  public readonly account = input.required<Account | null>();
}
