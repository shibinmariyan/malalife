import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  uname; any;
  password: any;
  username: any;
  reply: any;
  show: boolean = false;
  constructor(private dataService: DataService, private route: Router, private auth: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
  }
  loginuser(event) {
    let param: any =
    {
      email: this.uname,
      password: this.password
    }
    console.log(param);
    if ((!param.email) || (!param.password)) {
      this.reply = "invalid Credentials";
      console.log("invalid Credentials");
    }
    else {
      this.show = true;
      console.log("show passed");
    }
    let a = this.dataService.login(param).subscribe((data: any) => {
      console.log(data);
      if (!data) {
        this.reply = "Unauthorized Access";
        console.log(this.reply);
      }
      else {
        this.auth.setToken(data.token);
        sessionStorage.setItem('user', data.uname);
        this.route.navigate(["/user"]);
        console.log("success");
      }
    }
    );

  }

}
