import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';

import { LoginComponent } from './views/login/Login.component';
import { P404Component } from './views/shared/P404/P404.component';
import { P500Component } from './views/shared/P500/P500.component';
import { LayoutComponent } from './views/shared/layout/layout.component';
import { AuthGuard } from './_core/_guard/auth.guard';
import { UserComponent } from './views/user/user.component';
import { RecordComponent } from './views/record/record.component';
import { HistoryComponent } from './views/history/history.component';
import { DepartmentComponent } from './views/department/department.component';
import { TeamComponent } from './views/team/team.component';
import { CategoryComponent } from './views/category/category.component';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { StatusComponent } from './views/status/status.component';
import { LocationComponent } from './views/location/location.component';
import { ColorCodeComponent } from './views/color-code/color-code.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertifyService } from './_core/_service/alertify.service';
import { BasicAuthInterceptor } from './_core/_helper/basic-auth.interceptor';
import { AddModalComponent } from './views/modal/add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    P404Component,
    P500Component,
    LayoutComponent,
    UserComponent,
    RecordComponent,
    HistoryComponent,
    DepartmentComponent,
    TeamComponent,
    CategoryComponent,
    SubCategoryComponent,
    StatusComponent,
    LocationComponent,
    ColorCodeComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
