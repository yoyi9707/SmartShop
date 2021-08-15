import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  selectedUser: User;
  Users: User[];

  readonly URL = 'http://167.172.134.249/:3000/api/user';

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }


  getUsers() {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL, {
      headers: {
        'x-access-token': token
      }
    });
  }

  getUserbyId(_id: string) {
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + `/${_id}`, {
      headers: {
        'x-access-token': token
      }
    });
  }


  getUsersPaginated(page?: number) {
    if (!page) { page = 1 }
    const token = sessionStorage.getItem('x-access-token');
    return this.http.get(this.URL + '/paginated/' + page, {
      headers: {
        'x-access-token': token
      }
    });
  }

  updateUser(User: User) {
    return this.http.put(this.URL + `/${User._id}`, User);
  }

  updateUserByUsername(username: string, pass: string) {
    const body = {
      "username": username,
      "pass": pass
    }
    return this.http.put(this.URL + '/usname', body);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL + `/${_id}`);
  }

}




