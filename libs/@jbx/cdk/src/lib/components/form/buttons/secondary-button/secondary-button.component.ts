import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBaseComponent } from '../button-base.component';

@Component({
    selector: 'jbx-secondary-button',
    imports: [CommonModule],
    templateUrl: './secondary-button.component.html',
    styleUrl: './secondary-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryButtonComponent extends ButtonBaseComponent {
  public label = input.required<string>();
}
