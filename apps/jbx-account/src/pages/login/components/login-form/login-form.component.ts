import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { InputPasswordComponent, InputTextComponent, PrimaryButtonComponent, SecondaryButtonComponent, FormLayoutComponent } from '@jbx/cdk';
import { LoginFormControlsEnum } from './enums/login-form-controls.enum';
import { LoginFormBuilder } from './form-builder/login-form-builder.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, ReactiveFormsModule, InputPasswordComponent, InputTextComponent, PrimaryButtonComponent, FormLayoutComponent],
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  public login = output<{email: string, password: string}>();

  private readonly loginFormBuilder = inject(LoginFormBuilder);

  protected readonly loginFormGroup = computed(() =>
    this.loginFormBuilder.getLoginFormGroup()
  );

  protected readonly LoginFormControlsEnum : typeof LoginFormControlsEnum = LoginFormControlsEnum;
 
  protected onLoginButtonClick(): void {
    const login = this.loginFormGroup().getRawValue() as {email: string, password: string};
    this.login.emit(login);
  }

}
