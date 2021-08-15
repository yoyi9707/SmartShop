import { AuthModule } from './../../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RoleComponent } from './role/role.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CreateUserComponent, ListUserComponent, PerfilComponent, RoleComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    AuthModule,
    NgbModule
  ]
})
export class UserModule { }
