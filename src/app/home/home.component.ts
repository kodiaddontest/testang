import { Component, OnInit, Output } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';
import { MainpageComponent } from '../mainpage/mainpage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private login_stts:boolean=true;
private user: any = {};
  constructor(private router: Router, private menuService: MenuService, private restApi: RestApi, private dataService: DataService) {
    this.getUser();

  }
  

  async getUser() {
    var data = await this.restApi.get("http://localhost:3000/api/profile/user");
    console.log(data)
    if (data['success']) {
      this.user = data['user'];
    }
  }

  ngOnInit() {
    this.login_stts=false;

  }

  logout() {

    localStorage.clear();
    this.router.navigate(['/']);
  }

}
