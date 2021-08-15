import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [PaymentComponent, CartComponent, ListOrdersComponent],
  imports: [
    CommonModule,
    PayRoutingModule,
    NgbModule
  ]
})
export class PayModule { }
