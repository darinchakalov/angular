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
export class UserDetailComponent {
  user$ = this.userService.user$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    activatedRoute.params.subscribe(({ id }) => this.userService.loadUser(id));
  }

  // ngOnInit(): void {
  //   //With RxJS
  //   this.activateRoute.params
  //     .pipe(
  //       tap(() => (this.user = undefined)),
  //       switchMap(({ id }) =>
  //         this.userService.loadUser(id)
  //       )
  //     )
  //     .subscribe((user) => (this.user = user));

  //With snapshot
  // this.userService
  //   .loadUser(this.activateRoute.snapshot.params['id'])
  //   .subscribe((user) => {
  //     this.user = user;
  //   });
  // }
}
