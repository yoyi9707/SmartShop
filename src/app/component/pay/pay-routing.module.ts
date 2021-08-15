import { VigilanteGuard } from './../../guards/vigilante.guard';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cart' },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'order',
    component: ListOrdersComponent,
    canActivate: [VigilanteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
