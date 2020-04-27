import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  APIList: any = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    let apiBaseUrl = "http://192.168.1.2:8809/api/v1.0/admin/";
    let loginBaseUrl = "http://192.168.1.2:8809/api/auth/";
    this.APIList = {
      login: loginBaseUrl + "adminlogin",
      activeprofiles: apiBaseUrl + "activeprofiles",
      gurudetails: apiBaseUrl + "gurudetails",
      logout: apiBaseUrl + "logout",
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
