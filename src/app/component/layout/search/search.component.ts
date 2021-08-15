import { Router } from '@angular/router';
import { Product } from './../../../models/product';
import { HelpService } from './../../../services/help.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NgbPopoverConfig]
})
export class SearchComponent implements OnInit {


  constructor(
    public productService: ProductService,
    public helpService: HelpService,
    public route: Router,
    config: NgbPopoverConfig
    ) {
      config.placement = 'right';
      config.triggers = 'hover';
    }

  ngOnInit(): void {
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
    if(item.promotion > 0){
      price = item.promotion;
    }else{
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

showProductBySubCat(cat: string){
  this.helpService.getProducts(1, cat);
  this.route.navigate(['/product/category']);
}


}
