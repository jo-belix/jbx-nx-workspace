import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  computed,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFormBuilderService } from './form-builder/account-form-builder.service';
import { AccountFormControlsEnum } from './enums/account-form-controls.enum';
import {ReactiveFormsModule } from '@angular/forms';
import { Account } from '@jbx-account/domain';
import {
  FormLayoutComponent,
  InputTextComponent,
  PrimaryButtonComponent,
  SecondaryButtonComponent,
} from '@jbx/cdk';

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
  public createAccount = output<Account>();
  public updateAccount = output<Account>();
  public cancelForm = output<void>();
  public closeForm = output<void>();

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
    this.cancelForm.emit();
  }
  protected onSaveButtonClick(): void {
    const account = this.accountFormGroup().getRawValue() as Account;
    if (this.account().id === 0) {
      this.createAccount.emit(account);
    } else {
      this.updateAccount.emit(account);
    }
  }

  onCloseButtonClick(): void {
    this.closeForm.emit();
  }
}
