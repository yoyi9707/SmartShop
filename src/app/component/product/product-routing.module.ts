import { ProveedorAdminGuard } from './../../guards/proveedor-admin.guard';
import { AdminGuard } from './../../guards/admin.guard';
import { ListAlmacenComponent } from './list-almacen/list-almacen.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorGuard } from 'src/app/guards/proveedor.guard';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProductsComponent,
    canActivate: [ProveedorGuard]
  },
  {
    path: '',
    component: ListProductsComponent,
    canActivate: [ProveedorAdminGuard]
  },
  {
    path: 'category',
    component: ListCategoryComponent
  },
  {
    path: 'almacen',
    component: ListAlmacenComponent,
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
