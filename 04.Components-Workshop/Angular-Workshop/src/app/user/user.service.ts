import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const apiUrl = environment.apiURl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser | null | undefined = undefined;

  get isLoggedIn(): boolean {
    //double explamation mark casts variable to boolean
    return !!this.user;
  }

  constructor(
    private http: HttpClient // @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    // try {
    //   const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
    //   this.user = JSON.parse(localStorageUser);
    // } catch (error) {
    //   this.user = undefined;
    // }
  }

  login(data: { username: string; password: string }) {
    return this.http
      .post<IUser>(`${apiUrl}/login`, data, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }
  // this.localStorage.setItem('<USER>', JSON.stringify(this.user));

  logout() {
    return this.http
      .post<IUser>(`${apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(tap(() => (this.user = null)));
    // this.localStorage.removeItem('<USER>');
  }

  register(data: {
    username: string;
    email: string;
    password: string;
    repass: string;
    tel: string;
  }) {
    return this.http
      .post<IUser>(`${apiUrl}/register`, data, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  getProfileInfo() {
    return this.http
      .get<IUser>(`${apiUrl}/users/profile`, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  updateUserInfo(data: { username: string; email: string; tel?: string }) {
    return this.http
      .put<IUser>(`${apiUrl}/users/profile`, data, {
        withCredentials: true,
      })
      .pipe(tap((user) => (this.user = user)));
  }
}
