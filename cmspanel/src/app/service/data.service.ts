import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  APIList: any = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    // let apiBaseUrl = "http://192.168.1.19:8000";
    let loginBaseUrl = "http://192.168.1.19:8000/api/";
    this.APIList = {
      login: loginBaseUrl + "cmsLogin",

    };

  }
  login(params) {
    return this.http.post(this.APIList.login, params);
  }
  logout() {
    this.http.get(this.APIList.logout);
    this.auth.removeToken();
  }
  userprofile() {
    return this.http.get(this.APIList.activeprofiles);
  }
  guruprofile() {
    return this.http.get(this.APIList.gurudetails);

  }
}
