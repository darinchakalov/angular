import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = false;

  data = [{ test: 1 }, { test: 2 }, { test: 3 }];

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
