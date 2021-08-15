
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AyudaComponent,
    LoginComponent,
    RecoverPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AyudaComponent
  ]
})
export class AuthModule { }
