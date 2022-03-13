import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, retry } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable()
export class AuthActivate implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const { authenticationRequired, authenticationFailureRedirectUrl } =
      route.data;
    console.log('here');

    if (
      typeof authenticationRequired === 'boolean' &&
      authenticationRequired === this.userService.isLoggedIn
    ) {
      return true;
    }

    return this.router.parseUrl(authenticationFailureRedirectUrl || '/');
  }
}
