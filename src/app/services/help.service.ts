import { Router } from '@angular/router';
import { Sold } from './../models/sold';
import { SoldService } from './sold.service';
import { AuthService } from './auth.service';
import { Product } from './../models/product';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  //Notification
  BoolNotifActive = false;
  NotifActive = "fixed-top toast";
  buttonprueba = "btn btn-primary m-3";
  Contenido = "";

  //Category
  IsCategory = true;
  //Subcategory
  SubCate = "";
  productA = [new Product()];
  productB = [new Product()];
  productC = [new Product()];
  showProducts = [[new Product()]];
  products: Product[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;

  //Search
  productASearch = [new Product()];
  productBSearch = [new Product()];
  productCSearch = [new Product()];
  showProductsSearch = [[new Product()]];
  productsSearch: Product[];
  currentPageSearch: number;
  nextpageSearch: number;
  beforepageSearch: number;
  pagesSearch: number;
  search: string;


  constructor(
    public productService: ProductService,
    public authService: AuthService,
    public soldService: SoldService,
    public route: Router) { }

   //////////////Notification//////////////////////////
  showNotif(message: string) {
    this.BoolNotifActive = true;
    this.NotifActive = "fixed-top toast fade show";
    this.Contenido = message;

    //Cerrar la notificación en 5s
    setTimeout(() => {
      this.closeNotif();
    }, 3000);
  }

  closeNotif() {
    this.BoolNotifActive = false;
    this.NotifActive = "fixed-top toast";
  }
  //////////////EndNotification//////////////////////////


  //////////////Subcategory//////////////////////////
  getProducts(page?: number, subCat?: string) {
    this.IsCategory = false;
    this.SubCate = subCat;
    this.productA = [new Product()];
    this.productB = [new Product()];
    this.productC = [new Product()];
    this.showProducts = [[new Product()]];

    if (!page) { page = 1; }
    this.productService.getProductsBySubCategory(this.SubCate, page)
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
  //////////////EndSubcategory//////////////////////////

  //////////////Category//////////////////////////
  getProductsCat(page?: number, Cat?: string) {
    this.IsCategory = true;
    this.SubCate = Cat;
    this.productA = [new Product()];
    this.productB = [new Product()];
    this.productC = [new Product()];
    this.showProducts = [[new Product()]];

    if (!page) { page = 1; }
    this.productService.getProductsByCategory(this.SubCate, page)
      .subscribe(res => {
        this.products = res['product'] as Product[];
        this.pages = res['pages'];
        this.currentPage = res['current'];

        this.beforepage = this.currentPage - 1;
        this.nextpage = this.beforepage + 2;

        console.log(this.currentPage + ' <--currentPage')
        console.log(this.pages + ' <--pages')
        console.log(this.products.length + ' <--cantProduct')

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
  //////////////EndCategory//////////////////////////



  //////////////ROLES/////////////////////////////////
  isInRole(rol: string): Boolean{
    for (let index = 0; index < this.authService.roles.length; index++) {
      const element = this.authService.roles[index];
      if(rol == element.name || element.name == 'Super Administrador'){
        return true;
      }
    }
    return false
  }

  isLoged(){
    if(this.authService.logedUser.CI){
      return true;
    }
    return false;
  }
 //////////////EndROLES/////////////////////////////////


  //////////////Search/////////////////////////////////
  getProductsSearch(page?: number, search?: string) {
    this.productASearch = [new Product()];
    this.productBSearch = [new Product()];
    this.productCSearch = [new Product()];
    this.showProductsSearch = [[new Product()]];

    if (!page) { page = 1; }
    if (!search) { search = ""; }
    this.search = search
    this.productService.getProductsAvailableSerch(search, page)
      .subscribe(res => {
        this.productsSearch = res['product'] as Product[];
        this.pagesSearch = res['pages'];
        this.currentPageSearch = res['current'];

        this.beforepageSearch = this.currentPageSearch - 1;
        this.nextpageSearch = this.beforepageSearch + 2;

        for (let index = 0; index < this.productsSearch.length; index++) {

          if (index == 0) {
            this.productASearch[0] = (this.productsSearch[index]);
          }
          if (index == 1) {
            this.productBSearch[0] = (this.productsSearch[index]);
          }
          if (index == 2) {
            this.productCSearch[0] = (this.productsSearch[index]);
          }
          if (((index == 3) || (index == 6))) {
            this.productASearch.push(this.productsSearch[index]);
          }
          if (((index == 4) || (index == 7))) {
            this.productBSearch.push(this.productsSearch[index]);
          }
          if (((index == 5) || (index == 8))) {
            this.productCSearch.push(this.productsSearch[index]);
          }
        }
        if (this.productASearch[0]._id) { this.showProductsSearch[0] = (this.productASearch) };
        if (this.productBSearch[0]._id) { this.showProductsSearch.push(this.productBSearch) };
        if (this.productCSearch[0]._id) { this.showProductsSearch.push(this.productCSearch) };
      });
  }
  //////////////EndSearch/////////////////////////////////


  //////////////Payment/////////////////////////////////
  getPaymentByYearOrder(order: number, year: number){
    this.soldService.getSoldByYearOrder(order, year)
      .subscribe(res =>{
        this.soldService.selectedSold = res['sol'] as Sold;
        this.route.navigate(['/pay/payment']);
      })
  }
  //////////////EndPayment/////////////////////////////////


}
