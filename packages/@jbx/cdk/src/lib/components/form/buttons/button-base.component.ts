import { Component, input, output } from '@angular/core';
import { FormBaseComponent } from '../form-base.component';

@Component({
  template: '',
  standalone: false,
})
export abstract class ButtonBaseComponent extends FormBaseComponent {
  public isDisabled = input<boolean>(false);
  public clickNg = output<void>();

  protected onbuttonClick(): void {
    this.clickNg.emit();
  }
}
