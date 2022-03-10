import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [CommonModule],
  providers: [ProductService],
})
export class ProductModule {}
