import { Directive, input } from '@angular/core';

@Directive()
export abstract class FormBaseComponent {
  public id = input.required<string>();
  public ariaLabel= input.required<string>();
}
