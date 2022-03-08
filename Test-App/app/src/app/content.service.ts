import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProduct[]>('http://localhost:3030/data/products');
  }
}
