import { AuthModule } from './../../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomenclatorRoutingModule } from './nomenclator-routing.module';
import { ListNomenclatorsComponent } from './list-nomenclators/list-nomenclators.component';
import { CreateNomenclatorComponent } from './create-nomenclator/create-nomenclator.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListNomenclatorsComponent, CreateNomenclatorComponent],
  imports: [
    CommonModule,
    NomenclatorRoutingModule,
    FormsModule,
    AuthModule,
    NgbModule
  ]
})
export class NomenclatorModule { }
