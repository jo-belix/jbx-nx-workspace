import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
  computed,
  Signal,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFormBuilderService } from './form-builder/account-form-builder.service';
import { AccountFormControlsEnum } from './enums/account-form-controls.enum';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAccountFormGroup } from './interfaces/i-account.form-group';
import { Account } from '@jbx-account/domain';
import {
  FormLayoutComponent,
  InputTextComponent,
  PrimaryButtonComponent,
  SecondaryButtonComponent,
} from '@jbx/cdk';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-account-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormLayoutComponent,
    InputTextComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  providers: [AccountFormBuilderService],
  templateUrl: './account-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountFormComponent {
  public account = input.required<Account>();
  public isReadOnly = input.required<boolean>();
  public create = output<Account>();
  public update = output<Account>();
  public cancel = output<void>();
  public close = output<void>();

  private readonly accountFormBuilderService: AccountFormBuilderService =
    inject(AccountFormBuilderService);

  protected accountFormGroup = computed(() =>
    this.accountFormBuilderService.getAccountFormGroup(
      this.account(),
      this.isReadOnly()
    )
  );

  AccountFormGroupControlsEnum: typeof AccountFormControlsEnum =
    AccountFormControlsEnum;

  protected onCancelButtonClick(): void {
    this.cancel.emit();
  }
  protected onSaveButtonClick(): void {
    const account = this.accountFormGroup().getRawValue() as Account;
    if (this.account().id === 0) {
      this.create.emit(account);
    } else {
      this.update.emit(account);
    }
  }

  onCloseButtonClick(): void {
    this.close.emit();
  }
}
