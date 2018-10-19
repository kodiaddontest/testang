import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestApi } from './services/rest.api';
import { DataService } from './services/data.service';
import { MessageComponent } from './message/message.component';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AfterLoginGuardService } from './services/after-login-guard.service';
import { MenuService } from './services/menu.service';
import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     FormsModule,
     RouterModule.forRoot([
       {path : "home",component : HomeComponent},
       {
         path : "register",component : RegisterComponent,canActivate : [AuthGuardService]
       },
       {
         path : 'login',component : LoginComponent,canActivate : [AuthGuardService]
       },
       {
        path : '',component : MainpageComponent,canActivate : [AuthGuardService]
      }
     ])

  ],
  providers: [RestApi,DataService,AuthGuardService,AfterLoginGuardService,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
