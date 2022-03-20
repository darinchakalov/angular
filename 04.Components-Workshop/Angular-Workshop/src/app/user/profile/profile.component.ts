import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;

  constructor(private userService: UserService) {}

  getDetails() {
    this.userService.getProfileInfo().subscribe((user) => (this.user = user));
  }
}
