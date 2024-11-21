import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountService, IAccountDataProvider } from '@jbx-account/domain';
import { AccountDataprovider } from '@jbx-account/adapter';

@Component({
  selector: 'lib-account-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: IAccountDataProvider, useClass: AccountDataprovider }, AccountService], // Providing Ports for Account 
})
export class AccountRootComponent {
}
