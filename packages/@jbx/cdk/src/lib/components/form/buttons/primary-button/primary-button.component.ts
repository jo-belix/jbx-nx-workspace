import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBaseComponent } from '../button-base.component';

@Component({
  selector: 'jbx-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent extends ButtonBaseComponent {
  @Input({ required: true }) public label!: string;
}
