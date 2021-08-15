import { PagenotFoundComponent } from './component/layout/pagenot-found/pagenot-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
  },
  {
    path: '**',
    component: PagenotFoundComponent
  },
  // {
  //   path: 'productos/:variable',
  //   component: ProductosComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
