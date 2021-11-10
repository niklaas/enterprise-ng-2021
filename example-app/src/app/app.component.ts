import { Component, OnInit } from '@angular/core';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'example-app';

  constructor(private someService: SomeService) {}

  ngOnInit() {
    this.someService.doesSomething();
  }
}
