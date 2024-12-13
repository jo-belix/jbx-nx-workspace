import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { PageLayoutComponent } from '@jbx/cdk';
import { AuthenticatedUser, AuthenticationManager } from '@jbx/security';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, PageLayoutComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  public routeToNavigate = input<string|null>(null);

  private readonly authenticationManager = inject(AuthenticationManager);
  private readonly router = inject(Router);


  protected onLogin(login: {email: string, password: string}): void {
    this.authenticationManager.login(new AuthenticatedUser(login.email,login.email,login.email));
    if(this.routeToNavigate()) {
      this.router.navigate([this.routeToNavigate()]);
    }else{
      this.router.navigate(['/']);
    }
  }
}
