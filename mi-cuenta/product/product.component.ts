import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../order/order.model';

@Component({
  selector: 'ss-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input() order: Order[];

  private collapseOpened: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  isCollapseOpened( collapseOpened ) {
    this.collapseOpened = collapseOpened;
  }
}
