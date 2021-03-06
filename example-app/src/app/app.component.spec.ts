import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockDeclarations, MockProvider, MockProviders } from 'ng-mocks';
import { SomeService } from './some.service';
import { SomeComponent } from './some/some.component';
import { SomePipe } from './some.pipe';
import { SomeDirective } from './some.directive';
import { SomeComponentProvidedService } from './some-component-provided.service';
import { EMPTY } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          MockDeclarations(SomeComponent, SomePipe, SomeDirective),
        ],
        imports: [],
        providers: [MockProvider(SomeService, { tick$: EMPTY })],
      }).compileComponents();

      TestBed.overrideComponent(AppComponent, {
        set: {
          providers: [MockProviders(SomeComponentProvidedService)],
        },
      });

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    })
  );

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
