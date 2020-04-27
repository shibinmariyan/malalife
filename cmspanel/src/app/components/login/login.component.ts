import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';
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
    let a = this.dataService.login(param).subscribe((data: any) => {
      console.log(data);
      if (!data) {
        this.reply = "Unauthorized Access";
        console.log(this.reply);
      }
      else {
        this.auth.setToken(data.token);
        sessionStorage.setItem('', data.uname);
        this.route.navigate(["/sheet"]);
        console.log("success");
      }
    }
    );

  }

}
