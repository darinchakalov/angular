import { Component } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: IUser[] | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadusers().subscribe((users) => (this.users = users));
  }
}
