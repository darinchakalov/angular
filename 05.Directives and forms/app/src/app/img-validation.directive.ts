import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appImgValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImgValidationDirective,
      multi: true,
    },
  ],
})
export class ImgValidationDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    let urlSplitByDoubleDots = control.value.split(':')[0];
    let urlSplitByDot = control.value.split('.').pop();
    if (urlSplitByDoubleDots !== 'https' && urlSplitByDoubleDots !== 'http') {
      return { invalidProtocol: true };
    }
    if (urlSplitByDot !== 'jpg' && urlSplitByDot !== 'png') {
      return { invalidExtention: true };
    }
    return null;
  }
}
