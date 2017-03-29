import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from "@angular/http";

//import { TransferHttp } from '../../modules/transfer-http/transfer-http';

@Component({
  selector: 'app-home',
  template: `<h3>{{subs | json}}</h3>`
})
export class HomeViewComponent implements OnInit {
  subs: any;

  constructor(private http: Http) {}

  ngOnInit() {
    /*this.subs = this.http.get('http://localhost:9002/data').map(data => {
      return `${data.greeting} ${data.name}`;
    });*/
    this.http.get('http://localhost:9002/data').subscribe(data => {
      let datas = data.json();
      this.subs = datas;
    });
  }
}
