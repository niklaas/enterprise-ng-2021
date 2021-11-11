import { Injectable } from '@angular/core';

@Injectable()
export class SomeComponentProvidedService {
  constructor() {}

  doesSomething() {
    console.log('got constructed');
  }
}
