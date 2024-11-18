import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBaseComponent } from '../button-base.component';

@Component({
  selector: 'jbx-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryButtonComponent extends ButtonBaseComponent {

  @Input({required: true}) public label!: string;

}
