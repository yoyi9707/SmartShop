import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sold } from './../models/sold';
@Injectable({
  providedIn: 'root'
})
export class SoldService {

  selectedSold: Sold;
  solds: Sold[];
  totalSolds = 0;
  pages = 0;
  currentPage = 0;

  readonly URL = 'http://localhost:3000/api/sold';

  constructor(private http: HttpClient,
    private productService: ProductService,
    private authService: AuthService) {
    this.selectedSold = new Sold();
  }

  getSolds() {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getSoldsByUser(page?: number) {
    if (!page) { page = 1 }
    var userid = this.authService.logedUser._id;
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginatedbyuser/' + page + '?userid=' + `${userid}`, {
      headers: {
        'x-access-token': token
      }
    });
  }


  getSoldsPaginated(page?: number) {
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginated/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getSoldByYearOrder(order: number, year: number){
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/yearorder/' + order + '?year=' + `${year}`, {
      headers: {
        'x-access-token': token
      }
    });
  }


  postSold() {
    var sold = {
      user: this.authService.logedUser._id,
      products: this.productService.CarProducts
    };
    const token = sessionStorage.getItem('x-access-token');
    return this.http.post(this.URL, sold, {
      headers: {
        'x-access-token': token
      }
    });
  }

}
