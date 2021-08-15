import { AdminGuard } from './../guards/admin.guard';
import { SearchComponent } from './layout/search/search.component';
import { VigilanteGuard } from '../guards/vigilante.guard';
import { PagenotFoundComponent } from './layout/pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'nomenclator',
        loadChildren: () => import('./nomenclator/nomenclator.module').then(m => m.NomenclatorModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'pay',
        loadChildren: () => import('./pay/pay.module').then(m => m.PayModule)
      },
    ]
  },
  {
    path: '404',
    component: PagenotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
