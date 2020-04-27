import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 // username: any ="";
username:any="sms";
  Lastactivity: any = "Last Activity Jan 10 2019- Jan 20 ";
  constructor(private auth: AuthService, private dataService: DataService, private route: Router) 
  {
    if(this.username =="")
      console.log("null user"+this.username);
    else
      console.log(" user");

//   this.username= auth.username;
   }

  ngOnInit() {
  }
  logout() {
    this.dataService.logout();
    this.route.navigate([""]);
    console.log("logout from header");

  }

}
