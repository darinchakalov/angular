import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;

  @ViewChild(NgForm) form: NgForm | undefined;

  editMode: boolean = false;

  constructor(private userService: UserService) {
    this.getDetails();
  }

  getDetails(): void {
    this.userService.getProfileInfo().subscribe((user) => (this.user = user));
  }

  updateDetails() {
    this.userService
      .updateUserInfo(this.form?.value)
      .subscribe((user) => (this.user = user));
    this.editMode = !this.editMode;
  }
}
