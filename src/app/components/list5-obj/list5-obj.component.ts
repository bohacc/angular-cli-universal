import {Component, Input} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AppService} from "../../modules/app.service";

@Component({
  selector: 'list5-obj',
  templateUrl: 'list5-obj.template.html',
  providers: [AppService]
})

export class List5Obj {
  meta: any = {category: {id: null}};
  @Input() args: any;

  constructor(private api: ApiService, private appService: AppService) {
    this.meta.showDownload = true;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.get('/cats/' + this.appService.getPath())
      .subscribe(res => {
        let data: any = res.json();
        this.meta.category = {id: data.id || ''};
      });
  }
}
