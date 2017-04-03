//import { isBrowser } from 'angular2-universal';

import {Directive, ElementRef, Inject, OnInit} from '@angular/core';

import {AppService} from "../../modules/app.service";

declare var $: any;

@Directive({
  selector: '[scroll-bar-width]'
})

export class ScrollBarWidth implements OnInit {
  constructor(private _elRef: ElementRef, @Inject('isBrowser') private isBrowser: Boolean, private appService: AppService) {}

  ngOnInit() {
    if (this.isBrowser) {
      // JQUERY ACTUAL VIEWPORT
      let widthWithScroll = $(this._elRef.nativeElement).outerWidth();
      this.appService.setScrollBarWidth(100 - widthWithScroll);
    }
  }
}
