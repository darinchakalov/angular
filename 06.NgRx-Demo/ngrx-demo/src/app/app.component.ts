import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementCounter } from 'src/demo_store/actions';
import { getCounter } from 'src/demo_store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$ = this.store.select(getCounter);

  constructor(private store: Store<any>) {}

  incrementCounter(): void {
    this.store.dispatch(incrementCounter());
  }
}
