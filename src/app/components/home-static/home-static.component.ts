import { Component } from '@angular/core';

import {ApiService} from "../../services/api.service";
import {AppService} from "../../modules/app.service";
import {TranslateService} from "../../pipes/translate/translate.service";
let Constants = require('../../../backend/constants');

@Component({
  selector: 'home-static',
  templateUrl: 'home-static.template.html',
})
export class HomeStatic {
  constructor(private api: ApiService, private translate: TranslateService, private appService: AppService) {
    this.api.get('/language')
      .subscribe(res => {
        let data: any = res.json();
        this.translate.use(data.language);
      });
  }

  ngOnInit() {
    /*this.api.get('/language')
      .subscribe(res => {
        let data: any = res.json();
        this.translate.use(data.language);
      });*/
  }

  onResize(event) {
    //this.appService.setAppWidth(event.target.innerWidth);
    //this.appService.refreshWidth();
  }
}
