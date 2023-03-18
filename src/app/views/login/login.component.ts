import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public requestLogin!: RequestLogin;

  constructor(private loginService: LoginService, private alertService : AlertService){}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      data => {
        this.alertService.info('', 'Funcionalidade ainda não implementada! ')
    },
    (httperror) => {
      this.alertService.error(httperror.error.title,httperror.error.message);
    });
  }
}
