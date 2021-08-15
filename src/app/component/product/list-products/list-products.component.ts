import { AuthService } from './../../../services/auth.service';
import { HelpService } from './../../../services/help.service';
import { Router } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers: [NgbPopoverConfig]
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;

  constructor(
    public productService: ProductService,
    config: NgbPopoverConfig,
    public route: Router,
    public helpService: HelpService,
    public authService: AuthService
  ) {
    config.placement = 'right';
    config.triggers = 'hover';
  }


  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(page?: number) {
    var flag = false;
    if (!page) { page = 1; }

    //VERIFICANDO ROL
    for (let index = 0; index < this.authService.roles.length; index++) {
      const element = this.authService.roles[index];
      if (element.name == "Proveedor" || element.name == "Super Administrador") {
        flag = true;
        index = this.authService.roles.length;
      }
    }
    if (flag) {
      this.productService.getProductsPaginated(page)
        .subscribe(res => {
          this.products = res['product'] as Product[];
          this.pages = res['pages'];
          this.currentPage = res['current'];

          this.beforepage = this.currentPage - 1;
          this.nextpage = this.beforepage + 2;
        });
    } else {
      this.productService.getProductsAvailableProveedor(page)
        .subscribe(res => {
          this.products = res['product'] as Product[];
          this.pages = res['pages'];
          this.currentPage = res['current'];

          this.beforepage = this.currentPage - 1;
          this.nextpage = this.beforepage + 2;
        });
    }
  }

  edit(item: Product) {
    console.log(item);
    this.productService.selectedProduct = item;
    this.route.navigate(['/product/create']);
  }

  activarProd(product: any) {
    product.active = true;
    this.productService.updateProduct(product)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  desactivarProd(product: Product) {
    product.active = false;
    this.productService.updateProduct(product)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  deleteProd(id: string) {
    console.log(id)
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts(this.currentPage);
        },
        err => console.log(err)
      )
  }

  addStoreProduct(cant: HTMLInputElement, product: Product) {
    product.storeActive = true;
    if (cant.value) {
      var cantidad = parseFloat(cant.value);
    } else {
      var cantidad = 1;
    }
    var suma = cantidad + product.storeAvailability;

    product.storeAvailability = suma;
    this.productService.updateProduct(product)
      .subscribe(
        res => {
          // this.photoSelected = null;
          this.helpService.showNotif('Se añadieron ' + cantidad + ' ' + product.name + ' al Almacén. Hay ' + suma + ' en el Almacén.');
        },
        err => console.log(err)
      )

  }

}
