import { Router } from '@angular/router';
import { HelpService } from './../../services/help.service';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbPopoverConfig]
})
export class HomeComponent implements OnInit {

  DealsNewV = 'Promociones del día';
  idInput: string;
  public form: FormGroup;
  productA = [new Product()];
  productB = [new Product()];
  productC = [new Product()];
  showProducts = [[new Product()]];
  products: Product[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;
  //////////
  productANew = [new Product()];
  productBNew = [new Product()];
  productCNew = [new Product()];
  showProductsNew = [[new Product()]];
  productsNew: Product[];
  currentPageNew: number;
  nextpageNew: number;
  beforepageNew: number;
  pagesNew: number;
  ///////
  cantRopa = 0;
  cantMuebles = 0;
  cantTecnolo = 0;
  cantComida = 0;



  constructor(
    public productService: ProductService,
    private formBuilder: FormBuilder,
    private helpService: HelpService,
    public route: Router,
    config: NgbPopoverConfig
  ) {
    this.form = this.formBuilder.group({
      cantProd: []
    });
    config.placement = 'right';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
    this.getProducts();
    this.getProductsNew();
    this.getCantCategory();
  }

  DealsNew(name: string) {
    this.DealsNewV = name;
  }


  submit(cantidad: HTMLInputElement, item: Product) {
    if (cantidad.value && parseFloat(cantidad.value) > 0) {
      var cant = parseFloat(cantidad.value);
    } else {
      var cant = 1;
    }

    //verificando que no se añada más elementos de los que hay disponibles
    if (cant <= item.storeAvailability) {

      var existe = false;
      var idProd = item._id;
      var name = item.name
      var success = true;
      var price = 0;
      if (item.promotion > 0) {
        price = item.promotion;
      } else {
        price = item.price;
      }

      //verificar si el carrito está vacío
      if (this.productService.CarProducts == null) {
        var price = 0;
          if (item.promotion > 0) {
            price = item.promotion;
          }else{
            price = item.price;
          }
        this.productService.CarProducts = [[item, cant, price]]
      } else {
        //verificar si ya está el producto en el carrito
        for (let index = 0; index < this.productService.CarProducts.length; index++) {
          if (this.productService.CarProducts[index][0]._id == idProd) {

            //verificar si la cantidad que se va a agregar más la existente en el carrito no excede la cantidad del Almacén
            if (this.productService.CarProducts[index][1] + cant <= item.storeAvailability) {
              this.productService.CarProducts[index][1] = this.productService.CarProducts[index][1] + cant;
              index = this.productService.CarProducts.length
            } else {
              this.helpService.showNotif('Hay ' + this.productService.CarProducts[index][1] + ' de este elemento en el carrito y ' + item.storeAvailability + ' en el almacén. No puede agregar más productos de los que hay en existencia.');
              success = false;
            }
            existe = true;
          }
        }
        if (!existe) {
          var price = 0;
          if (item.promotion > 0) {
            price = item.promotion;
          }else{
            price = item.price;
          }
          this.productService.CarProducts.push([item, cant, price]);
        }
      }
      if (success) {
        this.productService.totalCarProducts = this.productService.totalCarProducts + cant;
        this.productService.precioTotCarProducts = this.productService.precioTotCarProducts + (price * cant);

        if (item.kind == "Ropa") {
          this.productService.totalRopa = this.productService.totalRopa + cant;
          this.productService.precioRopa = this.productService.precioRopa + (price * cant)
        }
        if (item.kind == "Muebles") {
          this.productService.totalMueble = this.productService.totalMueble + cant;
          this.productService.precioMueble = this.productService.precioMueble + (price * cant)
        }
        if (item.kind == "Tecnología") {
          this.productService.totalTecnologia = this.productService.totalTecnologia + cant;
          this.productService.precioTecnologia = this.productService.precioTecnologia + (price * cant)
        }
        if (item.kind == "Comida") {
          this.productService.totalComida = this.productService.totalComida + cant;
          this.productService.precioComida = this.productService.precioComida + (price * cant)
        }

        this.helpService.showNotif('Se añadió ' + cant + ' elemento de ' + name);
      }
    } else {
      this.helpService.showNotif('Hay' + item.storeAvailability + ' en el almacén del producto:' + item.name);
    }
  }

  getProducts(page?: number) {
    this.productA = [new Product()];
    this.productB = [new Product()];
    this.productC = [new Product()];
    this.showProducts = [[new Product()]];

    if (!page) { page = 1; }
    this.productService.getProductsAvailablePromotion(page)
      .subscribe(res => {
        this.products = res['product'] as Product[];
        this.pages = res['pages'];
        this.currentPage = res['current'];

        this.beforepage = this.currentPage - 1;
        this.nextpage = this.beforepage + 2;

        for (let index = 0; index < this.products.length; index++) {

          if (index == 0) {
            this.productA[0] = (this.products[index]);
          }
          if (index == 1) {
            this.productB[0] = (this.products[index]);
          }
          if (index == 2) {
            this.productC[0] = (this.products[index]);
          }
          if (((index == 3) || (index == 6))) {
            this.productA.push(this.products[index]);
          }
          if (((index == 4) || (index == 7))) {
            this.productB.push(this.products[index]);
          }
          if (((index == 5) || (index == 8))) {
            this.productC.push(this.products[index]);
          }
        }
        if (this.productA[0]._id) { this.showProducts[0] = (this.productA) };
        if (this.productB[0]._id) { this.showProducts.push(this.productB) };
        if (this.productC[0]._id) { this.showProducts.push(this.productC) };

      });
  }

  getProductsNew(page?: number) {
    this.productANew = [new Product()];
    this.productBNew = [new Product()];
    this.productCNew = [new Product()];
    this.showProductsNew = [[new Product()]];

    if (!page) { page = 1; }
    this.productService.getProductsAvailableNew(page)
      .subscribe(res => {
        this.productsNew = res['product'] as Product[];
        this.pagesNew = res['pages'];
        this.currentPageNew = res['current'];

        this.beforepageNew = this.currentPageNew - 1;
        this.nextpageNew = this.beforepageNew + 2;

        for (let index = 0; index < this.productsNew.length; index++) {

          if (index == 0) {
            this.productANew[0] = (this.productsNew[index]);
          }
          if (index == 1) {
            this.productBNew[0] = (this.productsNew[index]);
          }
          if (index == 2) {
            this.productCNew[0] = (this.productsNew[index]);
          }
          if (((index == 3) || (index == 6))) {
            this.productANew.push(this.productsNew[index]);
          }
          if (((index == 4) || (index == 7))) {
            this.productBNew.push(this.productsNew[index]);
          }
          if (((index == 5) || (index == 8))) {
            this.productCNew.push(this.productsNew[index]);
          }
        }
        if (this.productANew[0]._id) { this.showProductsNew[0] = (this.productANew) };
        if (this.productBNew[0]._id) { this.showProductsNew.push(this.productBNew) };
        if (this.productCNew[0]._id) { this.showProductsNew.push(this.productCNew) };

      });
  }

  getCantCategory(){
    this.productService.getCantCategory()
      .subscribe(res => {
        this.cantRopa = res['RopaT'];
        this.cantMuebles = res['MueblesT'];
        this.cantTecnolo = res['TecnoloT'];
        this.cantComida = res['ComidaT'];

      })
  }

  showProductByCat(cat: string){
    // this.helpService.updateSubCat(cat);
    this.helpService.getProductsCat(1, cat);
    this.route.navigate(['/product/category']);
  }

}
