import {
  Component, Directive, Input, OnInit, ReflectiveInjector, TemplateRef, ViewChild,
  ViewContainerRef, Compiler
} from '@angular/core';
import {createComponentFactory} from "@angular/core/src/view";


@Directive({
  selector: "dynamic-html-outlet",
})
export class HtmlOutlet implements OnInit {
  ngOnInit() {

  }
}
/*
  // I hold the context that will be exposed to the embedded view.
  // --
  // NOTE: The context is an injectable input. However, it's sub-properties are
  // also individually injectable properties based on the arguments passed to the
  // factory function.
  public context: any;

  // I hold the TemplateRef that we are cloning into the view container.
  @Input() template: TemplateRef<any>;

  // I hold the view container into which we are injecting the cloned template.
  public viewContainerRef: ViewContainerRef;


  // I initialize the directive.
  constructor( viewContainerRef: ViewContainerRef ) {

    this.context = {};
    this.viewContainerRef = viewContainerRef;

  }


  // ---
  // PUBLIC METHODS.
  // ---


  // I get called once, when the class is initialized, after the inputs have been
  // bound for the first time.
  public ngOnInit() : void {

    if ( this.template && this.context ) {

      this.viewContainerRef.createEmbeddedView( this.template, this.context );

    }

  }

}
*/

/*
@Directive({
  selector: 'dynamic-html-outlet',
})
export class ComponentOutlet {
  @Input('componentOutlet') private template: string;
  @Input('componentOutletSelector') private selector: string;
  @Input('componentOutletContext') private context: Object;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

  private _createDynamicComponent() {
    this.context = this.context || {};

    const metadata = new ComponentMetadata({
      selector: this.selector,
      template: this.template,
    });

    const cmpClass = class _ { };
    cmpClass.prototype = this.context;
    return Component(metadata)(cmpClass);
  }

  ngOnChanges() {
    if (!this.template) return;
    this.compiler.compileModuleAndAllComponentsAsync(this._createDynamicComponent())
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.vcRef.clear();
        this.vcRef.createComponent(factory, 0, injector);
      });
  }
}
*/
