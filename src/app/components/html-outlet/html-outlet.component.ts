import {
  Component, Directive, Input, OnInit, ReflectiveInjector, TemplateRef, ViewChild,
  ViewContainerRef, Compiler, ComponentFactoryResolver, ComponentRef, OnChanges, OnDestroy, Injector, Type,
  NgModuleFactory, NgModuleRef, SimpleChanges
} from '@angular/core';


@Directive({selector: '[htmlOutlet]'})
export class HtmlOutlet implements OnChanges, OnDestroy {
  @Input() htmlOutlet: Type<any>;
  @Input() htmlOutletInjector: Injector;
  @Input() htmlOutletContent: any[][];
  @Input() htmlOutletNgModuleFactory: NgModuleFactory<any>;
  @Input() htmlOutletArgs: any;

  private _componentRef: ComponentRef<any> = null;
  private _moduleRef: NgModuleRef<any> = null;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this._componentRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
    }
    this._viewContainerRef.clear();
    this._componentRef = null;

    if (this.htmlOutlet) {
      let injector = this.htmlOutletInjector || this._viewContainerRef.parentInjector;

      if ((changes as any).htmlOutletNgModuleFactory) {
        if (this._moduleRef) {
          this._moduleRef.destroy();
        }
        if (this.htmlOutletNgModuleFactory) {
          this._moduleRef = this.htmlOutletNgModuleFactory.create(injector);
        } else {
          this._moduleRef = null;
        }
      }
      if (this._moduleRef) {
        injector = this._moduleRef.injector;
      }

      let componentFactory =
        injector.get(ComponentFactoryResolver).resolveComponentFactory(this.htmlOutlet);

      this._componentRef = this._viewContainerRef.createComponent(
        componentFactory, this._viewContainerRef.length, injector, this.htmlOutletContent);
      this._componentRef.instance.args = this.htmlOutletArgs || {};
    }
  }
  ngOnDestroy() {
    if (this._moduleRef) {
      this._moduleRef.destroy();
    }
  }
}
