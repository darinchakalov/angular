import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: IUser | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    //With RxJS
    this.activateRoute.params
      .pipe(
        tap(() => (this.user = undefined)),
        switchMap(({ id }) =>
          this.userService.loadUser(id)
        )
      )
      .subscribe((user) => (this.user = user));

    //With snapshot
    // this.userService
    //   .loadUser(this.activateRoute.snapshot.params['id'])
    //   .subscribe((user) => {
    //     this.user = user;
    //   });
  }
}
