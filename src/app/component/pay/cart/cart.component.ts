import { AuthService } from './../../../services/auth.service';
import { Sold } from './../../../models/sold';
import { SoldService } from './../../../services/sold.service';
import { HelpService } from './../../../services/help.service';
import { Router } from '@angular/router';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [new Product()];
  cantProducts = 0;

  constructor(
    public productService: ProductService,
    public route: Router,
    public helpService: HelpService,
    public soldService: SoldService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getValuesCarrousel();
  }

  up(product: Product) {
    for (let index = 0; index < this.productService.CarProducts.length; index++) {
      const element = this.productService.CarProducts[index];
      if (product._id == element[0]._id) {
        if (element[1] < element[0].storeAvailability) {
          element[1] = element[1] + 1;
          this.upValues(product);
        }
        index = this.productService.CarProducts.length;
      }
    }
  }

  down(product: Product) {
    for (let index = 0; index < this.productService.CarProducts.length; index++) {
      const element = this.productService.CarProducts[index];
      if (product._id == element[0]._id) {
        if (element[1] > 1) {
          element[1] = element[1] - 1;
        } else {
          this.productService.CarProducts.splice(index, 1);
        }
        this.downValues(product);
        index = this.productService.CarProducts.length;
      }
    }
  }

  upValues(item: Product) {
    var price = 0;
    if (item.promotion > 0) {
      price = item.promotion;
    } else {
      price = item.price;
    }
    this.productService.totalCarProducts = this.productService.totalCarProducts + 1;
    this.productService.precioTotCarProducts = this.productService.precioTotCarProducts + price;
    if (item.kind == "Ropa") {
      this.productService.totalRopa = this.productService.totalRopa + 1;
      this.productService.precioRopa = this.productService.precioRopa + price
    }
    if (item.kind == "Muebles") {
      this.productService.totalMueble = this.productService.totalMueble + 1;
      this.productService.precioMueble = this.productService.precioMueble + price
    }
    if (item.kind == "Tecnología") {
      this.productService.totalTecnologia = this.productService.totalTecnologia + 1;
      this.productService.precioTecnologia = this.productService.precioTecnologia + price
    }
    if (item.kind == "Comida") {
      this.productService.totalComida = this.productService.totalComida + 1;
      this.productService.precioComida = this.productService.precioComida + price
    }

  }

  downValues(item: Product) {
    var price = 0;
    if (item.promotion > 0) {
      price = item.promotion;
    } else {
      price = item.price;
    }
    this.productService.totalCarProducts = this.productService.totalCarProducts - 1;
    this.productService.precioTotCarProducts = this.productService.precioTotCarProducts - price;
    if (item.kind == "Ropa") {
      this.productService.totalRopa = this.productService.totalRopa - 1;
      this.productService.precioRopa = this.productService.precioRopa - price
    }
    if (item.kind == "Muebles") {
      this.productService.totalMueble = this.productService.totalMueble - 1;
      this.productService.precioMueble = this.productService.precioMueble - price
    }
    if (item.kind == "Tecnología") {
      this.productService.totalTecnologia = this.productService.totalTecnologia - 1;
      this.productService.precioTecnologia = this.productService.precioTecnologia - price
    }
    if (item.kind == "Comida") {
      this.productService.totalComida = this.productService.totalComida - 1;
      this.productService.precioComida = this.productService.precioComida - price
    }

  }

  deleteProductCart(product: Product) {
    var price = 0;
    if (product.promotion > 0) {
      price = product.promotion;
    } else {
      price = product.price;
    }
    for (let index = 0; index < this.productService.CarProducts.length; index++) {
      const element = this.productService.CarProducts[index];
      if (product._id == element[0]._id) {
        this.productService.CarProducts.splice(index, 1);
        index = this.productService.CarProducts.length;


        this.productService.totalCarProducts = this.productService.totalCarProducts - element[1];
        this.productService.precioTotCarProducts = this.productService.precioTotCarProducts - (price * element[1]);
        if (element[0].kind == "Ropa") {
          this.productService.totalRopa = this.productService.totalRopa - element[1];
          this.productService.precioRopa = this.productService.precioRopa - (price * element[1])
        }
        if (element[0].kind == "Muebles") {
          this.productService.totalMueble = this.productService.totalMueble - element[1];
          this.productService.precioMueble = this.productService.precioMueble - (price * element[1])
        }
        if (element[0].kind == "Tecnología") {
          this.productService.totalTecnologia = this.productService.totalTecnologia - element[1];
          this.productService.precioTecnologia = this.productService.precioTecnologia - (price * element[1])
        }
        if (element[0].kind == "Comida") {
          this.productService.totalComida = this.productService.totalComida - element[1];
          this.productService.precioComida = this.productService.precioComida - (price * element[1])
        }


      }
    }
  }

  getValuesCarrousel() {
    this.productService.getProductsAvailablePromotion(1)
      .subscribe(res => {
        this.products = res['product'] as Product[];
      });
  }

  showProductBySubCat(cat: string) {
    this.helpService.getProducts(1, cat);
    this.route.navigate(['/product/category']);
  }

  buy() {
    if(!this.authService.logedUser.CI){
      this.route.navigate(['/auth/login']);
      return false;
    }

    this.soldService.postSold()
      .subscribe(res => {
        var order = res['order'];
        var today = new Date();
        var year = today.getFullYear();

        for (let index = 0; index < this.productService.CarProducts.length; index++) {
          const element = this.productService.CarProducts[index];
          element[0].storeAvailability = element[0].storeAvailability - element[1];
          this.productService.updateProduct(element[0])
            .subscribe(res => {

            })
        }

        this.productService.CarProducts.splice(0);
        this.productService.totalCarProducts = 0;
        this.productService.precioTotCarProducts = 0;
        this.productService.totalRopa = 0;
        this.productService.precioRopa = 0;
        this.productService.totalMueble = 0;
        this.productService.precioMueble = 0;
        this.productService.totalTecnologia = 0;
        this.productService.precioTecnologia = 0;
        this.productService.totalComida = 0;
        this.productService.precioComida = 0;

        this.soldService.getSoldsByUser()
          .subscribe(res => {
            this.soldService.solds = res['sol'] as Sold[];
            this.soldService.totalSolds = res['total'];
            this.soldService.pages = res['pages'];
            this.soldService.currentPage = res['current'];

            //Ver Factura
            this.helpService.getPaymentByYearOrder(order, year);
          })

      });
  }

}
