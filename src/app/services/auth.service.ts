import { Role } from './../models/role';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logedUser: User;
  roles: Role[];
  readonly URL = 'http://167.172.134.249:3000/api/auth';
  code: string;
  selectedUsertoRecovery: User;
  usernameRecovery: string;

  constructor(public route: Router, private http: HttpClient) {
    this.logedUser = new User();
    this.roles = [];
  }

  login(User: User) {
    return this.http.post(this.URL + '/signin', User);
  }

  register(User: User) {
    return this.http.post(this.URL + '/signup', User);
  }

  findUser() {
    const token = sessionStorage.getItem("x-access-token");
    return this.http.post(this.URL + '/findUser', { token: token })
  }

  async check() {
    const token = sessionStorage.getItem("x-access-token");
    await this.http.post(this.URL + '/check', { token: token })
      .subscribe(res => {
        if (res['valid'] == true) {
          return true;
        }
      },
        err => {
          sessionStorage.clear();
          this.logedUser = new User();
          this.route.navigate(['/auth/login']);
          return false;
        })
  }

  recoverPass(usname: string) {
    const username = {
      username: usname
    }
    return this.http.post('http://localhost:3000/api/email', username);
  }
}
