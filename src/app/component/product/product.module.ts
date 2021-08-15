import { AuthModule } from './../../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListAlmacenComponent } from './list-almacen/list-almacen.component';



@NgModule({
  declarations: [ListProductsComponent, CreateProductsComponent, ListCategoryComponent, ListAlmacenComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgbModule,
    AuthModule
  ]
})
export class ProductModule { }
