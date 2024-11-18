import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountStateService } from '../account-state.service';

@Component({
  selector: 'lib-account-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-root.component.html',
  styleUrl: './account-root.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountStateService], // Providing Ports for Account 
})
export class AccountRootComponent {
}
