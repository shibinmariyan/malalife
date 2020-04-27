import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
 //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { ComponentComponent } from './component/component.component';

///
import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//

import { LeftComponent } from './component/left/left.component';
import { MainComponent } from './component/main/main.component';
import { RightComponent } from './component/right/right.component';
import { LoginComponent } from './component/login/login.component';
import { SubbodyComponent } from './component/subbody/subbody.component';
import { UserComponent } from './component/user/user.component';
import { GuruComponent } from './component/guru/guru.component';
import { Pay2guruComponent } from './component/pay2guru/pay2guru.component';
import { Test1Component } from './component/test1/test1.component';
import { GlobalinterceptorService } from './services/globalinterceptor.service';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';




//
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ComponentComponent,
    LeftComponent,
    MainComponent,
    RightComponent,
    LoginComponent,
    SubbodyComponent,
    UserComponent,
    GuruComponent,
    Pay2guruComponent,
    Test1Component,
    UserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GlobalinterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
