import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | null | undefined = undefined;

  get isLoggedIn(): boolean {
    //double explamation mark casts variable to boolean
    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }) {
    return this.http
      .post<IUser>(`/api/login`, data)
      .pipe(tap((user) => (this.user = user)));
  }

  logout() {
    return this.http
      .post<IUser>(`/api/logout`, {})
      .pipe(tap(() => (this.user = null)));
  }

  register(data: {
    username: string;
    email: string;
    password: string;
    repass: string;
    tel: string;
  }) {
    return this.http
      .post<IUser>(`/api/register`, data)
      .pipe(tap((user) => (this.user = user)));
  }

  getProfileInfo() {
    return this.http
      .get<IUser>(`/api/users/profile`)
      .pipe(tap((user) => (this.user = user)));
  }

  updateUserInfo(data: { username: string; email: string; tel?: string }) {
    return this.http
      .put<IUser>(`/api/users/profile`, data)
      .pipe(tap((user) => (this.user = user)));
  }
}
