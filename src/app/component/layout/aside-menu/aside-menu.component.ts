import { HelpService } from './../../../services/help.service';
import { Nomenclator } from 'src/app/models/nomenclator';
import { NomenclatorService } from './../../../services/nomenclator.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {

  public Ropa: Nomenclator[];
  public Mueble: Nomenclator[];
  public Tecnologia: Nomenclator[];
  public Comida: Nomenclator[];

  constructor(
    public authService: AuthService,
    public route: Router,
    public nomenclatorService: NomenclatorService,
    public helpService: HelpService) { }

  ngOnInit(): void {
    this.getCategoriesRopa('Ropa');
    this.getCategoriesMueble('Muebles');
    this.getCategoriesTecnologia('Tecnología');
    this.getCategoriesComida('Comida');

  }

  logout(){
    sessionStorage.clear();
    this.authService.logedUser = new User();
    this.route.navigate(['/auth/login']);
  }

  getCategoriesRopa(name: string) {
    this.nomenclatorService.getCategories(name)
      .subscribe(req => {
        this.Ropa = req as Nomenclator[];
      })
  }
  getCategoriesMueble(name: string) {
    this.nomenclatorService.getCategories(name)
      .subscribe(req => {
        this.Mueble = req as Nomenclator[];
      })
  }
  getCategoriesTecnologia(name: string) {
    this.nomenclatorService.getCategories(name)
      .subscribe(req => {
        this.Tecnologia = req as Nomenclator[];
      })
  }
  getCategoriesComida(name: string) {
    this.nomenclatorService.getCategories(name)
      .subscribe(req => {
        this.Comida = req as Nomenclator[];
      })
  }

  showProductBySubCat(cat: string){
    // this.helpService.updateSubCat(cat);
    this.helpService.getProducts(1, cat);
    this.route.navigate(['/product/category']);
  }


}
