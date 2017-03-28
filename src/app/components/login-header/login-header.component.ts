import { Component } from '@angular/core';
import { Router } from '@angular/router';

let Constants = require('../../../backend/constants');
import {ApiService} from "../../services/api.service";
import {AppService} from "../../modules/app.service";
import {TranslateService} from "../../pipes/translate/translate.service";

@Component({
  selector: 'login-header',
  templateUrl: 'login-header.template.html',
})
export class LoginHeader {
  appService: AppService;
  loginName: string;
  isLogged: Boolean;

  constructor(private router: Router, private api: ApiService, private translate: TranslateService) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.api.get('/logout')
      .subscribe(res => {
        let data: any = res.json();
        if (data.state == '1') {
          this.router.navigate([Constants.PATHS.LOGIN]);
        } else {
          alert(this.translate.instant(Constants.MESSAGE_LOGOUT_ERROR));
        }
      });
  }

  getUser() {
    this.api.get('/user')
      .subscribe(res => {
        let data: any = res.json();
        this.loginName = data.login;
        this.isLogged = data.isLogged;
        this.appService.setB2B(data.b2b);
      });
  }
}
