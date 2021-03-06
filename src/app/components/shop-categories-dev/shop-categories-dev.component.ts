import {Component, OnInit, Input, Inject, ElementRef, ViewChild} from '@angular/core';

import {AppService} from "../../modules/app.service";
import { SideMenu } from '../../services/side-menu.service';
declare var $: any;

@Component({
  selector: 'shop-categories-dev',
  templateUrl: '../../../../templates/a_6663.html',
})

export class ShopCategoriesDev implements OnInit, SideMenu{
  @Input('typeShowing') typeShowing: string;
  @ViewChild('selectElem') _elRef: ElementRef;
  store: any;
  field: string;
  menuShows: Array<string> = [];
  menuShowsMobile: Array<string> = [];

  constructor(
    private appService: AppService,
    @Inject('isBrowser') private isBrowser: Boolean
  ) {}

  ngOnInit() {
    this.store = this.appService.getStore();
    this.field = this.typeShowing; //'showCatsMobile'
    setTimeout(() => {
      this.setActive();
    }, 200);
  }

  menuShowItems(item: string) {
    let pos = this.menuShows.indexOf(item);
    if (pos > -1) {
      this.menuShows.splice(pos, 1);
    } else {
      this.menuShows.push(item);
    }
  }

  menuIsShow(item: string) {
    return this.menuShows.indexOf(item) > -1;
  }

  menuShowItemsMobile(item: string) {
    let pos = this.menuShowsMobile.indexOf(item);
    if (pos > -1) {
      this.menuShowsMobile.splice(pos, 1);
    } else {
      this.menuShowsMobile.push(item);
    }
  }

  menuIsShowMobile(item: string) {
    return this.menuShowsMobile.indexOf(item) > -1;
  }

  onCollapseAll(event: any) {
    this.menuShowsMobile = [];
  }

  onDefaultAction(arg: Array<string>) {
    this.menuShows = arg;
  }

  setActive() {
    if (this.isBrowser) {
      $(this._elRef.nativeElement)
        .find('li')
        .addClass('active')
        .removeClass('active')
        .removeClass('opened');

      $(this._elRef.nativeElement)
        .find('a[href="/' + this.appService.getPath() + '"]')
        .parents('li')
        .addClass('active')
        .addClass('opened');

      let arr = this.getActiveItemsAnchorsArr();
      this.onDefaultAction(arr);
    }
  }

  getActiveItemsAnchorsArr(): Array<string> {
    let arr = [];
    if (this.isBrowser) {
      $(this._elRef.nativeElement)
        .find('a[href="/' + this.appService.getPath() + '"]')
        .parents('li')
        .each(function (el) {
          let url = $(this).find('a').attr('href');
          if (url) {
            arr.push(url);
          }
        })
    }
    return arr;
  }
}
