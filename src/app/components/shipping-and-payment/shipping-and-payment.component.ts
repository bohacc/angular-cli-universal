import {Component, Output, EventEmitter} from '@angular/core';
import {AppService} from "../../modules/app.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'shipping-and-payment',
  templateUrl: 'shipping-and-payment.template.html'
})

export class ShippingAndPayment {
  @Output() onSelect = new EventEmitter<Boolean>();
  defaultShipping: string = '';
  defaultPayment: string = '';
  isInit: Boolean = false;
  selectedShipping: string;
  selectedPayment: string;

  constructor(private api: ApiService, private appService: AppService) {
  }

  ngOnInit() {
    this.getShipping();
  }

  onSelectShipping(event: {item: any, callback: Function}) {
    this.defaultShipping = event.item.code;
    this.defaultPayment = '';
    this.onSelect.emit((this.defaultShipping.length > 0 && this.defaultPayment.length > 0));
  }

  onSelectPayment(event: {item: any, callback: Function}) {
    this.defaultPayment = event.item.code;
    this.onSelect.emit((this.defaultShipping.length > 0 && this.defaultPayment.length > 0));
  }

  getShipping() {
    this.api.get('/user')
      .subscribe(res => {
        let data: any = res.json();
        this.defaultShipping = ((data.shipping || data.shippingDefault) || '');
        this.defaultPayment = (data.payment || '');
        this.isInit = true;
        // FOR FILLED PROPERTY
        if ((this.defaultShipping.length > 0 && this.defaultPayment.length > 0)) {
          this.onSelect.emit(true);
        }
      });
  }
}
