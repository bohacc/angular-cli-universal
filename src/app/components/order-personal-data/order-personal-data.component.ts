import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

let Constants = require('../../../backend/constants');
import {AppService} from "../../modules/app.service";
import {Registration} from "../registration/registration.component";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'order-personal-data',
  templateUrl: 'order-personal-data.template.html'
})

export class OrderPersonalData {
  @ViewChild('registration') registrationCmp: Registration;
  user: any;
  pathAfterLogin: string;

  constructor (private router: Router, private api: ApiService, private appService: AppService) {
    this.pathAfterLogin = Constants.PATHS.ORDER_PERSONAL_DATA;
    this.user = {isLogged: false};
  }

  ngOnInit() {
    this.getUser();
  }

  nextPage() {
    this.registrationCmp.orderSaveUser();
  }

  getUser() {
    this.api.get('/user')
      .subscribe(res => {
        let data: any = res.json();
        this.user = data;
      })
  }

  onLogin(obj: any) {
    this.user = obj.user;
  }
}
