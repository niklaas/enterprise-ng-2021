import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SomeService {
  private readonly tickSource = new Subject<void>();
  readonly tick$ = this.tickSource.asObservable();

  constructor() {}

  doesSomething() {
    console.log('very important');
    this.tickSource.next();
  }
}
