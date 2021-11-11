import { Component, OnInit } from '@angular/core';
import { SomeService } from './some.service';
import { SomeComponentProvidedService } from './some-component-provided.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SomeComponentProvidedService],
})
export class AppComponent implements OnInit {
  title = 'example-app';

  constructor(private someService: SomeService, private someComponentProvidedService: SomeComponentProvidedService) {}

  ngOnInit() {
    this.someService.doesSomething();
    this.someComponentProvidedService.doesSomething();
  }
}
