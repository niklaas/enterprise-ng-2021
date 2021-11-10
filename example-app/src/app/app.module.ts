import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';
import { SomeDirective } from './some.directive';
import { SomeService } from './some.service';
import { SomePipe } from './some.pipe';

@NgModule({
  declarations: [AppComponent, SomeComponent, SomeDirective, SomePipe],
  imports: [BrowserModule],
  providers: [SomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
