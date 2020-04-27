import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GlobalinterceptorService } from './service/globalinterceptor.service';
import { CmsSheetComponent } from './component/cms-sheet/cms-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CmsSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GlobalinterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
