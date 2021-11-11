import { TestBed } from '@angular/core/testing';

import { SomeComponentProvidedService } from './some-component-provided.service';

describe('SomeComponentProvidedService', () => {
  let service: SomeComponentProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeComponentProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
