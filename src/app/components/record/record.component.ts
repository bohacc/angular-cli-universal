import {Component, ElementRef} from '@angular/core';

import {ApiService} from "../../services/api.service";
let Constants = require('../../../backend/constants');
import {Router} from "@angular/router";
import {ToolsService} from "../../services/tools.service";
import {AppService} from "../../modules/app.service";

declare var $: any;

@Component({
  selector: 'record',
  templateUrl: 'record.template.html',
})

export class Record {
  product: any = {};
  appService: AppService;
  toolsService: ToolsService;

  constructor(private router: Router, private api: ApiService, private _elRef: ElementRef) {
    this.appService = AppService.getInstance();
    this.toolsService = ToolsService.getInstance();
  }

  ngOnInit() {
    this.getRecord();
  }

  getRecord() {
    this.api.get('/products/' + this.appService.getPath())
      .subscribe(res => {
        let data: any = res.json();
        this.product = data;
      });
  }
}
