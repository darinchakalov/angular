import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | undefined;

  get isLoggedIn(): boolean {
    //double explamation mark casts variable to boolean
    return !!this.user;
  }

  constructor(
    @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {}

  login(email: string, password: string): void {
    this.user = {
      email,
      username: 'Johnys',
    };
  }

  logout(): void {
    this.user = undefined;
  }
}
