import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

import { environment } from 'src/environments/environment';
const API_URL = environment.apiURl;

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`);
  }
  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    let posts = this.http.get<IPost[]>(`${API_URL}/posts${query}`);
    return posts;
  }
}
