import { HelpService } from './../../../services/help.service';
import { NgForm } from '@angular/forms';
import { Role } from './../../../models/role';
import { RoleService } from './../../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [NgbPopoverConfig]
})
export class RoleComponent implements OnInit {

  roles: Role[]
  error: string;

  constructor(public roleService: RoleService, public helpService: HelpService) { }

  ngOnInit(): void {
    this.getNom();
  }

  getNom() {
    this.roleService.getRoles()
      .subscribe(
        res => {
          this.roles = res as Role[];
          console.log(this.roles);
        },
        err => {
          console.log(err)
        }
      );
  };

  Add(form: NgForm) {
    this.roleService.postRol(form.value)
      .subscribe(
        res => {
          this.roleService.selectedRole = new Role();
          this.helpService.showNotif('Rol Guardado.');
          this.error = null;
          this.getNom();
        },
        err => {
          this.error = err['error']['message'];
        }
      )
  }

  delete(id: string) {
    this.roleService.deleteRol(id)
      .subscribe(
        res => {
          this.helpService.showNotif('Rol Eliminado.');
          this.getNom();
        },
        err => {
          this.error = err['error']['message'];
        }
      )
  }

}
