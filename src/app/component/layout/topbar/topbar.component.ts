import { Sold } from './../../../models/sold';
import { SoldService } from './../../../services/sold.service';
import { HelpService } from './../../../services/help.service';
import { ProductService } from './../../../services/product.service';
import { Role } from './../../../models/role';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public form: FormGroup;
  public url = ""

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    public route: Router,
    public productService: ProductService,
    public helpService: HelpService,
    public soldService: SoldService) {
    this.form = this.formBuilder.group({
      search: []
    });
  }

  ngOnInit(): void {
    this.urlMethod();
    this.findUser();
  }


  search() {
    this.helpService.getProductsSearch(1, this.form.value.search)
    this.route.navigate(['/search']);
  }

  urlMethod() {
    this.url = this.route.url;
  }

  logout() {
    sessionStorage.clear();
    this.authService.logedUser = new User();
    this.route.navigate(['/auth/login']);
  }

  findUser() {
    const token = sessionStorage.getItem("x-access-token");
    if (token) {
      this.authService.findUser()
        .subscribe(res => {
          this.authService.logedUser = res as User;
          this.authService.roles = res['roles'] as Role[];

          this.soldService.getSoldsByUser()
            .subscribe(res => {
              this.soldService.solds = res['sol'] as Sold[];
              this.soldService.totalSolds = res['total'];
              this.soldService.pages = res['pages'];
              this.soldService.currentPage = res['current'];
            })
        });
    }
  }

}
