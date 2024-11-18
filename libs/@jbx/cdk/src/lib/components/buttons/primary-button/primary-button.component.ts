import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBaseComponent } from '../button-base.component';

@Component({
  selector: 'jbx-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent extends ButtonBaseComponent {

  @Input({required: true}) public label!: string;

}
