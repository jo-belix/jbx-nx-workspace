import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  OnInit,
  input
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

@Component({
  selector: 'jbx-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent
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

  private setFormControlEnable() : void{
    this.formControl.enable();
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
