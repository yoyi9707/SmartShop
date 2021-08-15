import { ProveedorAdminGuard } from './../../guards/proveedor-admin.guard';
import { CreateNomenclatorComponent } from './create-nomenclator/create-nomenclator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNomenclatorsComponent } from './list-nomenclators/list-nomenclators.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'create',
    component: CreateNomenclatorComponent,
    canActivate: [ProveedorAdminGuard]
  },
  {
    path: 'list',
    component: ListNomenclatorsComponent,
    canActivate: [ProveedorAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomenclatorRoutingModule { }
