import { Product } from './../../../models/product';
import { UserService } from './../../../services/user.service';
import { SoldService } from './../../../services/sold.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user = new User();
  products = [[]];
  total = 0;
  date = '';

  constructor(
    public soldService: SoldService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.data();
  }

  getUser() {
    var userid = this.soldService.selectedSold.userId;
    this.userService.getUserbyId(userid)
      .subscribe(res => {
        this.user = res as User;
      })
  }

  data() {
    for (let index = 0; index < this.soldService.selectedSold.products.length; index++) {
      const element = this.soldService.selectedSold.products[index] as unknown as Product;
      const cant = this.soldService.selectedSold.quantity[index];
      const productprice = element.price;
      const pricefinal = this.soldService.selectedSold.unitprice[index];
      const percent = Math.round(((productprice - pricefinal) * 100) / productprice);

      if (index == 0) {
        this.products[0] = [element.name, productprice, pricefinal, cant, percent];
      } else {
        this.products.push([element.name, productprice, pricefinal, cant, percent]);
      }
      this.total = this.total + pricefinal * cant;
    }

    var date = this.soldService.selectedSold.createdAt.toString();
    this.date = date.substring(0, 10)
  }

}
