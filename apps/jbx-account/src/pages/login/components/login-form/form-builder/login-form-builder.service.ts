import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ILoginFormGroup } from '../interfaces/i-login.form-group';
import { passwordValidator } from '@jbx/cdk';

@Injectable({
  providedIn: 'root',
})
export class LoginFormBuilder {
  public getLoginFormGroup(): FormGroup<ILoginFormGroup> {
    return new FormGroup<ILoginFormGroup>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, passwordValidator],
      }),
    });
  }
}
