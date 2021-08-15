import { Role } from './../../../models/role';
import { RoleService } from './../../../services/role.service';
import { UserService } from './../../../services/user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  error: string;
  badpass = false;
  CIvalid = false;
  Roles: Role[];
  registerRoles = [];
  formRoles = [];

  constructor(
    public route: Router,
    public authService: AuthService,
    public userService: UserService,
    public rolService: RoleService) { }

  ngOnInit(): void {
    this.getRoles();
    this.saveRoles();
  }

  getRoles() {
    this.rolService.getRoles()
      .subscribe(res => {
        this.Roles = res as Role[];
      });
  }

  saveRoles() {
    if (this.userService.selectedUser._id) {
      this.userService.selectedUser.roles.forEach(element => {
        this.registerRoles.push(element);
      });
    }
  }

  verifyRol(rol: Role): Boolean {
    if (this.userService.selectedUser.roles) {
      for (let index = 0; index < this.userService.selectedUser['roles'].length; index++) {
        const element = this.userService.selectedUser['roles'][index];
        if (element['_id'] == rol._id) {
          return true;
        }
      }
    }
    return false
  }

  userRol(rol: Role) {
    let roleNotIn = true;
    for (let index = 0; index < this.registerRoles.length; index++) {
      const element = this.registerRoles[index];
      if (rol._id == element._id) {
        this.registerRoles.splice(index, 1)
        roleNotIn = false;
      }
    }
    if (roleNotIn) {
      this.registerRoles.push(rol);
    }
    this.userService.selectedUser.roles = this.registerRoles;
    this.getRoles();
  }


  Register(form: NgForm) {
    form.value.active = true;
    if (form.value.secondLastname === form.value.password) {
      form.value.secondLastname = "";
      this.badpass = false;
      if (this.registerRoles.length > 0) {

        this.registerRoles.forEach(element => {
          this.formRoles.push(element.name);
        });
        form.value.roles = this.formRoles
      }
      var CI = form.value.CI
      if (CI.toString().length == 11) {
        this.CIvalid = false;
        if (form.value._id) {
          this.userService.updateUser(form.value)
            .subscribe(res => {
              this.error = null;
              this.userService.selectedUser = new User();
            },
              err => {
                this.error = err['error']['message'];
              })
        } else {
          this.authService.register(form.value)
            .subscribe(res => {
              this.error = null;
              this.userService.selectedUser = new User();
            },
              err => {
                this.error = err['error']['message'];
              })
        }
      } else {
        this.CIvalid = true;
      }
    } else {
      this.badpass = true;
    }
  }

}
