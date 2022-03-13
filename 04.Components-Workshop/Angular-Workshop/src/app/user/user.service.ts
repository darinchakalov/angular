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
  ) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, username: string): void {
    this.user = {
      email,
      username: 'Johnys',
    };
    this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
}
