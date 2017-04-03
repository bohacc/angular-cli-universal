import { Component } from '@angular/core';
import { Router } from '@angular/router';

let Constants = require('../../../backend/constants');
import {AppService} from "../../modules/app.service";

@Component({
  selector: 'order-shipping-and-payment',
  templateUrl: 'order-shipping-and-payment.template.html'
})

export class OrderShippingAndPayment {
  filled: Boolean = false;

  constructor (private router: Router, private appService: AppService) {

  }

  onSubmit() {
    this.router.navigate([Constants.PATHS.ORDER_SUMMARY]);
  }

  onFilled(arg: Boolean) {
    this.filled = arg;
  }
}
