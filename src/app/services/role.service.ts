import { HttpClient } from '@angular/common/http';
import { Role } from './../models/role';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


  selectedRole: Role;
  Roles: Role[];

  readonly URL = 'http://167.172.134.249:3000/api/role';

  constructor(private http: HttpClient) {
    this.selectedRole = new Role();
  }

  getRoles() {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL, {
      headers: {
        'x-access-token': token
      }
    });
  }

  updateRol(Rol: Role) {
    return this.http.put(this.URL + `/${Rol._id}`, Rol);
  }

  deleteRol(_id: string) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.delete(this.URL + `/${_id}`, {
      headers: {
        'x-access-token': token
      }
    });
  }

  postRol(Rol: Role) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.post(this.URL, Rol, {
      headers: {
        'x-access-token': token
      }
    });
  }
}
