import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() isActive!: boolean;

  constructor(private elementRef: ElementRef) {}

  // this.elementRef.nativeElement.style.color = 'red'

  ngOnChanges() // simpleChanges: SimpleChanges
  {
    if (this.isActive) {
      this.elementRef.nativeElement.style.color = 'red';
    } else {
      this.elementRef.nativeElement.style.color = 'black';
    }
  }
}
