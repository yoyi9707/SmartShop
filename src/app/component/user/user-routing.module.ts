import { VigilanteGuard } from './../../guards/vigilante.guard';
import { AdminGuard } from './../../guards/admin.guard';
import { RoleComponent } from './role/role.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'create',
    component: CreateUserComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'list',
    component: ListUserComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [VigilanteGuard]
  },
  {
    path: 'role',
    component: RoleComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
