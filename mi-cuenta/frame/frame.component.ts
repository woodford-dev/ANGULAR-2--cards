import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order/order.model';
import { Product } from '../product/product.model';

@Component({
  selector: 'ss-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit {

  @Input() order: Order[];
  @Input() product: Product[];

  private collapseOpened: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  isCollapseOpened( collapseOpened ) {
    this.collapseOpened = collapseOpened;
  }

}
