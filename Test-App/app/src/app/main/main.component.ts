import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { IProduct } from '../shared/interfaces/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  products: IProduct[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.products = undefined;
    this.contentService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
