import { HelpService } from './../../../services/help.service';
import { Router } from '@angular/router';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-almacen',
  templateUrl: './list-almacen.component.html',
  styleUrls: ['./list-almacen.component.css']
})
export class ListAlmacenComponent implements OnInit {

  products: Product[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;
  public promotion = 0;
  public prom = 0;

  constructor(
    public productService: ProductService,
    config: NgbPopoverConfig,
    public route: Router,
    public helpService: HelpService
  ) {
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(page?: number) {

    if (!page) { page = 1; }
    this.productService.getProductsInStore(page)
      .subscribe(res => {
        this.products = res['product'] as Product[];
        this.pages = res['pages'];
        this.currentPage = res['current'];

        this.beforepage = this.currentPage - 1;
        this.nextpage = this.beforepage + 2;
      });
  }

  activarProd(product: any) {
    product.storeActive = true;
    this.productService.updateProduct(product)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  desactivarProd(product: Product) {
    product.storeActive = false;
    this.productService.updateProduct(product)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  selectProduct(item: Product) {
    this.productService.selectedProduct = item;
    this.promotion = item.promotion;
  }

  crearPromotion(): boolean {
    if (this.promotion == 0 || this.promotion == undefined || this.promotion == null) {
      return true;
    } else {
      return false;
    }
  }

  Promocion(prom?: number) {
    if (this.prom < 0 || this.prom > this.productService.selectedProduct.price) {
      this.helpService.showNotif('Error, el valor de la promoción debe ser mayor a 0 y menor que el precio original del producto.');
    } else {
      this.productService.selectedProduct.promotion = this.prom;
      if (prom == 0) { this.productService.selectedProduct.promotion = 0 }
      this.productService.updateProduct(this.productService.selectedProduct)
        .subscribe(
          res => {
            this.productService.selectedProduct = new Product();
            this.helpService.showNotif('Producto Guardado.');
            this.promotion = 0;
          },
          err => { console.log(err) }
        )
    }
  }


}
