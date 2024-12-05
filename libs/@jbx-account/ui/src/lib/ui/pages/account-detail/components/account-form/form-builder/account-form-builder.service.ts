import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAccountFormGroup } from '../interfaces/i-account.form-group';
import { AccountFormControlsEnum } from '../enums/account-form-controls.enum';
import { Account } from '@jbx-account/domain';

@Injectable({
  providedIn: 'root',
})
export class AccountFormBuilderService {
  public getAccountFormGroup(account: Account, isReadOnly : boolean): FormGroup<IAccountFormGroup> {
    const isDisabledForm = isReadOnly;

    return new FormGroup<IAccountFormGroup>({
      [AccountFormControlsEnum.id]: new FormControl<number | null>(
        { value: account.id, disabled: true },
        { nonNullable: true, validators: [Validators.required] }
      ),
      [AccountFormControlsEnum.name]: new FormControl<string | null>(
        { value: account.name, disabled: isDisabledForm },
        { nonNullable: true, validators: [Validators.required] }
      ),
    });
  }
}
