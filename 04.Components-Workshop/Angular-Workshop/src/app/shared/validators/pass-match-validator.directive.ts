import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPassMatchValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassMatchValidatorDirective,
      multi: true,
    },
  ],
})
export class PassMatchValidatorDirective implements Validator {
  @Input('pass') pass: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value !== this.pass) {
      return {
        passNoMatch: true,
      };
    }
    return null;
  }
}
