import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nomenclator } from './../models/nomenclator';

@Injectable({
  providedIn: 'root'
})
export class NomenclatorService {

  selectedNomenclator: Nomenclator;
  Nomenclators: Nomenclator[];

  readonly URL = 'http://167.172.134.249/api/nomenclator';

  constructor(private http: HttpClient) {
    this.selectedNomenclator = new Nomenclator();
  }



  getCategories(param: string) {
    const category = {
      name: param
    }
    return this.http.post(this.URL + '/category', category);
  }


  getNomenclators() {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL, {
      headers: {
        'x-access-token': token
      }
    });
  }


  getNomenclatorsPaginated(page?: number) {
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginated/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  updateNomenclator(Nomenclator: Nomenclator) {
    return this.http.put(this.URL + `/${Nomenclator._id}`, Nomenclator);
  }

  deleteNomenclator(_id: string) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.delete(this.URL + `/${_id}`, {
      headers: {
        'x-access-token': token
      }
    });
  }

  postNomenclator(Nomenclator: Nomenclator) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.post(this.URL, Nomenclator, {
      headers: {
        'x-access-token': token
      }
    });
  }
}
