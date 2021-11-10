import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSome]',
})
export class SomeDirective {
  @Input() someInput: unknown;

  constructor() {}
}
