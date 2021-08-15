import { HelpService } from './../../../services/help.service';
import { NomenclatorService } from './../../../services/nomenclator.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Nomenclator } from 'src/app/models/nomenclator';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  public file: File;
  public photoSelected: string | ArrayBuffer;
  public newFile = false;

  error: string;
  public previsualizacion: string;
  public categories: Nomenclator[];
  public subcategories: Nomenclator[];
  public textoimag = "Seleccionar imagen"

  constructor(
    public productService: ProductService,
    public nomenclatorService: NomenclatorService,
    public helpService: HelpService
  ) { }

  ngOnInit(): void {
    this.getCategories("Categoría");
  }


  Add(form: NgForm) {
    if(!form.value.kind){
      this.error = "Debe seleccionar una Categoría";
      return false;
    }
    if(!form.value.subCategory){
      this.error = "Debe seleccionar una SubCategoría";
      return false;
    }
    if(!this.file){
      this.error = "Debe seleccionar una Imagen";
      return false;
    }
    this.error = null;
    if (form.value._id) {
      form.value.active = this.productService.selectedProduct.active;
      form.value.storeActive = this.productService.selectedProduct.storeActive;
      form.value.storeAvailability = this.productService.selectedProduct.storeAvailability;
      form.value.promotion = this.productService.selectedProduct.promotion;
      if (this.newFile) {
        this.productService.updateProductImg(form.value, this.file)
          .subscribe(
            res => {
              this.productService.selectedProduct = new Product();
              // this.photoSelected = null;
              this.helpService.showNotif('Producto Actualizado con imagen.');
            },
            err => console.log(err)
          )
      } else {
        this.productService.updateProduct(form.value)
          .subscribe(
            res => {
              this.productService.selectedProduct = new Product();
              // this.photoSelected = null;
              this.helpService.showNotif('Producto Actualizado.');
            },
            err => console.log(err)
          )
      }
    } else {
      form.value.active = true;
      form.value.storeActive = true;
      form.value.storeAvailability = 0;
      this.productService.postProduct(form.value, this.file)
        .subscribe(
          res => {
            this.productService.selectedProduct = new Product();
            this.photoSelected = null;
            this.helpService.showNotif('Producto Guardado. Puede crear nuevos productos.');
          },
          err => console.log(err)
        )
    }
  }

  getCategories(name: string) {
    this.nomenclatorService.getCategories(name)
      .subscribe(req => {
        this.categories = req as Nomenclator[];
      })
  }

  getSubCategories(name: string) {
    if (name != "---Categoría---") {
      this.nomenclatorService.getCategories(name)
        .subscribe(req => {
          this.subcategories = req as Nomenclator[];
        })
    } else {
    }
  }

  saveImg(event): any {

    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file)
      this.newFile = true;
    }
  }


}

