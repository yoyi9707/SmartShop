import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  currentPage: number;
  nextpage: number;
  beforepage: number;
  pages: number;

  constructor(public userService: UserService, public route: Router) { }

  ngOnInit(): void {
    this.getUsersPaginated();
  }

  getUsersPaginated(page?: number) {
    if (!page) { page = 1; }
    this.userService.getUsersPaginated(page)
      .subscribe(res => {
        this.users = res['user'] as User[];
        this.pages = res['pages'];
        this.currentPage = res['current'];
        this.beforepage = this.currentPage - 1;
        this.nextpage = this.beforepage + 2;
      });
  }

  edit(item: User) {
    this.userService.selectedUser = item;
    this.route.navigate(['/user/create']);
  }

  crear() {
    this.userService.selectedUser = new User();
    this.route.navigate(['/user/create']);
  }

  habilitarUser(user: User) {
    user.active = true;
    this.userService.updateUser(user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  deshabilitarUser(user: User) {
    user.active = false;
    this.userService.updateUser(user)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          this.getUsersPaginated(this.currentPage);
        },
        err => console.log(err)
      )
  }

}
