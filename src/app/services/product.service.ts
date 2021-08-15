import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product;
  Products: Product[];
  CarProducts: [[Product, number, number]];
  totalCarProducts = 0;
  precioTotCarProducts = 0;
  totalRopa = 0;
  precioRopa = 0;
  totalMueble = 0;
  precioMueble = 0;
  totalTecnologia = 0;
  precioTecnologia = 0;
  totalComida = 0;
  precioComida = 0;

  readonly URL = 'http://167.172.134.249:3000/api/product';

  constructor(private http: HttpClient) {
    this.selectedProduct = new Product();
  }


  getProducts() {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL, {
      headers: {
        'x-access-token': token
      }
    });
  }


  getProductsPaginated(page?: number) {
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginated/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getCantCategory() {
    return this.http.get(this.URL + '/cantCategory');
  }


  getOneProduct(_id: string) {
    return this.http.get(this.URL + `/${_id}`);
  }

  postProduct(Product: Product, file: File) {

    const fd = new FormData();
    fd.append('name', Product.name);
    fd.append('code', Product.code);
    fd.append('price', Product.price.toString())
    fd.append('weigth', Product.weigth.toString())
    fd.append('picture', file)
    fd.append('kind', Product.kind)
    fd.append('subCategory', Product.subCategory)
    fd.append('active', Product.active.toString())
    fd.append('storeActive', Product.storeActive.toString())
    fd.append('storeAvailability', Product.storeAvailability.toString())
    fd.append('description', Product.description)
    fd.append('promotion', '0')
    const token = sessionStorage.getItem('x-access-token');
    return this.http.post(this.URL, fd, {
      headers: {
        'x-access-token': token
      }
    });
  }

  updateProductImg(Product: Product, file: File) {

    const fd = new FormData();
    fd.append('name', Product.name);
    fd.append('code', Product.code);
    fd.append('price', Product.price.toString())
    fd.append('weigth', Product.weigth.toString())
    fd.append('picture', file)
    fd.append('kind', Product.kind)
    fd.append('subCategory', Product.subCategory)
    fd.append('active', Product.active.toString())
    fd.append('storeActive', Product.storeActive.toString())
    fd.append('storeAvailability', Product.storeAvailability.toString())
    fd.append('description', Product.description)
    fd.append('promotion', Product.promotion.toString())
    const token = sessionStorage.getItem('x-access-token');
    return this.http.put(this.URL + '/img' + `/${Product._id}`, fd, {
      headers: {
        'x-access-token': token
      }
    });
  }

  updateProduct(Product: Product) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.put(this.URL + `/${Product._id}`, Product, {
      headers: {
        'x-access-token': token
      }
    });
  }

  deleteProduct(_id: string) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.delete(this.URL + `/${_id}`, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getProductsBySubCategory(subcat: string, page?: number) {
    if (!page) { page = 1 }
    return this.http.get(this.URL + '/category/' + page + '?cate=' + `${subcat}`);
  }

  getProductsByCategory(cat: string, page?: number) {
    if (!page) { page = 1 }
    return this.http.get(this.URL + '/categoryp/' + page + '?cate=' + `${cat}`);
  }

  getProductsInStore(page?: number){
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginatedStore/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getProductsAvailable(page?: number){
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginatedAvailable/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getProductsAvailableNew(page?: number){
    if (!page) { page = 1 }
    return this.http.get(this.URL + '/paginatedAvailableNew/' + page);
  }

  getProductsAvailablePromotion(page?: number){
    if (!page) { page = 1 }
    return this.http.get(this.URL + '/paginatedAvailablePromotion/' + page);
  }

  getProductsAvailableSerch(search: string, page?: number){
    if (!page) { page = 1 }
    return this.http.get(this.URL + '/paginatedAvailableSearch/' + page + '?search=' + `${search}`);
  }

  getProductsAvailableProveedor(page?: number){
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginatedAvailableProve/' + page,  {
      headers: {
        'x-access-token': token
      }
    });
  }


}
