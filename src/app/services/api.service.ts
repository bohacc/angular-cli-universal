import {Http, RequestOptions, Headers} from "@angular/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
//import {isNode} from "angular2-universal";
import {AppService} from "../modules/app.service";

declare var Zone: any;

@Injectable()
export class ApiService {

  constructor(public http: Http, @Inject('isBrowser') private isBrowser: Boolean, private appService: AppService) {
  }

  prepareOptions(opt: any) {
    /*let options: any;
    if (!this.isBrowser) {
      let hostname = Zone.current.get('originUrl');
      if (!opt) {
        let headers = new Headers({'Host': hostname});
        options = new RequestOptions({headers: headers});
      } else {
        opt.headers.append('Host', hostname);
        options = opt;
      }
    } else {
      options = opt;
    }*/
    return opt;
  }

  get(url: string, options?: any) {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.get(urlAll, this.prepareOptions(options));

    /*let key = urlAll;
    if (this.cache.has(key)) {
      return Observable.of(this.cache.get(key));
    }
    return this.http.get(urlAll, this.prepareOptions(options))
      .map(res => res.json())
      .do(json => {
        this.cache.set(key, json);
      })
      .share();*/
  }

  post(url: string, data: any, options?: any) {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.post(urlAll, data, this.prepareOptions(options));
  }

  put(url: string, data: any, options?: any) {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.put(urlAll, data, this.prepareOptions(options));
  }

  delete(url: string, options?: any) {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.delete(urlAll, this.prepareOptions(options));
  }
}
