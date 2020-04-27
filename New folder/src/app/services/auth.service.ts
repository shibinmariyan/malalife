import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  username:string="";
  constructor() {
    if(sessionStorage.getItem('accessToken')){
      this.token=sessionStorage.getItem('accessToken');
    }
   }
  isAuthorized() {
    return this.token ? true : false;
  }
  getToken(){
    return this.token;
  }
  setToken(token){
    this.token = token;
    if(token){
      sessionStorage.setItem('accessToken',token);
  
    //   console.log(this.username);

    }else{
      sessionStorage.removeItem('accessToken');
    }
  }
  removeToken()
  {
    this.token = null;
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
  }
}
