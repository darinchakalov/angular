import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidators]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorsDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorsDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    let isValidEmail = /^[A-Za-z0-9_.]{6,}@gmail.(com|bg)$/.test(control.value);
    console.log(isValidEmail);
    
    if (!isValidEmail) {
      return {
        invalidEmail: true,
      };
    }
    return null;
  }
}
