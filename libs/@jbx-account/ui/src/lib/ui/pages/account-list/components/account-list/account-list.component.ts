import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account } from '@jbx-account/domain';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent {

  public consult = output<Account>();
  public update = output<Account>();
  public delete = output<number>();

  public accounts = input<Account[] | null>(null);

  protected readonly router = inject(Router);
  
  protected onUpdateButtonClick(account: Account){
    this.update.emit(account);
  }

  protected onDeleteButtonClick(account: Account){
    this.delete.emit(account.id);
  }
  protected onConsultButtonClick(account: Account){
    this.consult.emit(account);
  }
}
