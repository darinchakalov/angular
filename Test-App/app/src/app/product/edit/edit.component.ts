import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  product: any | undefined;
  id!: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.fetchProduct();
  }

  fetchProduct() {
    let thisId = this.route.params;
    thisId.subscribe((id) => (this.id = id['id']));

    let product = this.productService.getProduct(this.id);
    product.subscribe((product) => (this.product = product));
  }
}
