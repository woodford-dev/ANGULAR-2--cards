import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order/order.model';
import { Product } from '../product/product.model';

@Component({
  selector: 'ss-contact-lens',
  templateUrl: './contact-lens.component.html',
  styleUrls: ['./contact-lens.component.less']
})
export class ContactLensComponent implements OnInit {

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
