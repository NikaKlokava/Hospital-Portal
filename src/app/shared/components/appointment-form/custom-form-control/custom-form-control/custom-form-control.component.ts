import { Component, forwardRef, Input } from '@angular/core';
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
  implements ControlValueAccessor, Validator
{
  @Input() formTitle!: string;
  @Input() inputType!: string;
  @Input() inputId!: string;

  private onTouched!: () => void;

  customFormControl = new FormControl('', [Validators.required]);

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.customFormControl.valid) {
      return null;
    }
    return { invalidForm: { valid: false, message: 'fields are invalid' } };
  }

  writeValue(obj: any): void {
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
