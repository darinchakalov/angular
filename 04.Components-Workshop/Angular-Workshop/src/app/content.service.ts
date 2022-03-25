import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<ITheme[]>(`/api/themes`);
  }

  loadSingleTheme(id: string) {
    return this.http.get<ITheme>(`/api/themes/${id}`);
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    let posts = this.http.get<IPost[]>(`/api/posts${query}`);
    return posts;
  }

  createNewTheme(data: any) {
    return this.http.post<ITheme>(`/api/themes`, data);
  }
}
