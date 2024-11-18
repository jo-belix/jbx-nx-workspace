import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '@jbx-account/domain';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent {

  public accounts = input<Account[] | null>(null);

  protected readonly router = inject(Router);


  
  protected onUpdateButtonClick(account: Account){
    this.router.navigateByUrl(`accounts/${account.id}`);
  }


}
