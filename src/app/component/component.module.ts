import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { AsideMenuComponent } from './layout/aside-menu/aside-menu.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { PagenotFoundComponent } from './layout/pagenot-found/pagenot-found.component';
import { SearchComponent } from './layout/search/search.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    AsideMenuComponent,
    TopbarComponent,
    FooterComponent,
    LayoutComponent,
    PagenotFoundComponent,
    SearchComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    NgbModule
  ]
})
export class ComponentModule { }
