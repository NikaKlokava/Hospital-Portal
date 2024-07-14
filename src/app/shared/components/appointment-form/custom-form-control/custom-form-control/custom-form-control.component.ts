import { Component, forwardRef, Input, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hp-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormControlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomFormControlComponent),
      multi: true,
    },
  ],
})
export class CustomFormControlComponent
  implements ControlValueAccessor, Validator, OnDestroy
{
  @Input() formTitle!: string;
  @Input() inputType!: string;
  @Input() inputId!: string;

  currentDate!: string;

  private onTouched!: () => void;

  customFormControl = new FormControl('', [Validators.required]);

  constructor() {
    this.currentDate = new Date().toISOString().split('T')[0];
  }
  ngOnDestroy(): void {
    this.customFormControl.reset();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.customFormControl.valid) {
      return null;
    }
    return { invalidForm: { valid: false, message: 'fields are invalid' } };
  }

  writeValue(obj: any): void {
    if (obj === null) {
      this.customFormControl.reset();
    }

    obj && this.customFormControl.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.customFormControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.customFormControl.disable();
    } else {
      this.customFormControl.enable();
    }
  }
}
