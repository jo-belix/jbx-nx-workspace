import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  OnInit,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBaseComponent } from '../../form-base.component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { passwordValidator } from '../../../../validators/password-validator/password.valirator';

@Component({
  selector: 'jbx-input-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
})
export class InputPasswordComponent
  extends FormBaseComponent
  implements OnInit, ControlValueAccessor
{
  // Injects
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  public readonly label = input.required<string>();
  public readonly helpText = input('');

  formControl: FormControl = new FormControl<string>('');

  private onChange!: (value: string) => void;
  private onTouch!: () => void;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
 
  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap((value) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
