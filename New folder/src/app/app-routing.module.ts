import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubbodyComponent } from './component/subbody/subbody.component';
import { LoginComponent } from './component/login/login.component';
import { Pay2guruComponent } from './component/pay2guru/pay2guru.component';
import { GuruComponent } from './component/guru/guru.component';
import { UserComponent } from './component/user/user.component';
import { Test1Component } from './component/test1/test1.component';
import { MainComponent } from './component/main/main.component';
import { UserDeleteComponent } from './component/user-delete/user-delete.component';

const routes: Routes = [
  
 { path: '', component: LoginComponent },
  {path:'main',component:MainComponent},
  { path: 'subbody', component: SubbodyComponent },
  {path: 'pay2guru', component:Pay2guruComponent},
  {path: 'guru', component:GuruComponent},
  {path: 'user', component:UserComponent},
  {path: 'test', component:Test1Component},
  {path: 'user-delete', component:UserDeleteComponent},

  
];
@NgModule({
  imports: [RouterModule.forRoot( routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
