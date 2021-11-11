import { Component, OnDestroy, OnInit } from '@angular/core';
import { SomeService } from './some.service';
import { SomeComponentProvidedService } from './some-component-provided.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SomeComponentProvidedService],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'example-app';

  private readonly destroy$ = new Subject<void>();

  constructor(
    private someService: SomeService,
    private someComponentProvidedService: SomeComponentProvidedService
  ) {}

  ngOnInit() {
    this.someService.doesSomething();
    this.someComponentProvidedService.doesSomething();

    this.someService.tick$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => console.log('ticked'))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
