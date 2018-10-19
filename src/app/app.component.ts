import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private menuStt = false;
  private login_stts:boolean=true;


constructor(private router : Router){
  if(localStorage.getItem('token')){
  this.menuStt = true;
  this.login_stts=true;

  }
  else{
    this.menuStt = false
    this.login_stts=false;
  }
}

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
