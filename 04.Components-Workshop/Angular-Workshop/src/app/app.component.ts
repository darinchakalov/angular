import { Component, Output } from '@angular/core';
import { retry } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe({
      error: () => {
        this.userService.user = null;
      },
    });
  }
}
