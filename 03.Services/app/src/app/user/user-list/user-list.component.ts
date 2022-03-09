import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() userArray: IUser[] = [];

  users: IUser[] | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe((users) => (this.users = users));
  }
}
