import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { IListFilter } from '../list-filter/list-filter.interface';

@Component({
  selector: '[list-filter]',
  templateUrl: 'list-filter.template.html',
})
export class ListFilter {
  tabsState: number = 1;
  @Input() meta: any;
  @Output('onChangeFilterAdvanced') onChangeFilterAdvancedOut = new EventEmitter<Array<IListFilter>>();
  @Output('onChangeFilterBasic') onChangeFilterBasicOut = new EventEmitter<Array<IListFilter>>();
  @Output('onResetFilter') onResetFilter = new EventEmitter();

  constructor(private http: Http) {}

  public setTabState(index) {
    this.tabsState = index;
    this.onTabsSet();
  }

  onChangeFilterAdvanced(meta: Array<IListFilter>) {
    this.onChangeFilterAdvancedOut.emit(meta);
  }

  onChangeFilterBasic(meta: Array<IListFilter>) {
    this.onChangeFilterBasicOut.emit(meta);
  }

  onTabsSet() {
    this.onResetFilter.emit();
  }
}
