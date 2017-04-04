import {Component, Input} from '@angular/core';
import {AppService} from '../../modules/app.service';
import {ApiService} from "../../services/api.service";
let Constants = require('../../../backend/constants');

@Component({
  selector: 'list-simple',
  templateUrl: 'list-simple.template.html',
})

export class ListSimple {
  @Input() rowsonpage: number;
  products: Array<Object> = [];
  notFoundText: string = Constants.NOT_FOUND_TEXT;
  isLoaded: Boolean = false;

  constructor(private api: ApiService, private appService: AppService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoaded = false;
    this.api.get('/products/list/' + this.appService.getPath() + this.getMeta())
      .subscribe(
        data => {
          this.products = data.json();
          this.isLoaded = true;
        },
        err => {
          this.isLoaded = true;
        }
      );
  }

  getMeta() {
    return '?sort=sort_order_asc' +
      '&rowsonpage=' + (this.rowsonpage || 8);
  }

}
