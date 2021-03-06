import {Component, Input} from "@angular/core";
import {AppService} from "../../modules/app.service";

@Component({
  selector: 'shipping-and-delivery-popup',
  templateUrl: 'shipping-and-delivery-popup.template.html'
})

export class ShippingAndDeliveryPopup {
  @Input() cartObj: any;
  isOpen: Boolean = false;
  store: any = {user: {b2b: false}};

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.store = this.appService.getStore();
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }
}
