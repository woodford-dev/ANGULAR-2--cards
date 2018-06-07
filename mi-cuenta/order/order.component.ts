import { Component, OnInit, Input } from '@angular/core';
import { Order } from './order.model';
import { Product } from '../product/product.model';

@Component({
  selector: 'ss-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;

  products: Product[];

  private collapseOpened: boolean = false;

  constructor() { }

  ngOnInit() {
    this.products = this.order.getProducts();
  }

  isCollapseOpened( collapseOpened ) {
    this.collapseOpened = collapseOpened;
  }

}
