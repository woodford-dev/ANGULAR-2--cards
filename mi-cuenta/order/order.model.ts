import { Product } from '../product/product.model';

export class Order {

  private id: string;
  private number: string;
  private state: string;
  private stateTitle: string;
  private status: string;
  private statusTitle: string;
  private created: string;
  private updated: string;
  private source: string;
  private sourceTitle: string;
  private type: string;
  private typeTitle: string;
  private aftercareStoreEpos: string;
  private aftercareStoreName: string;
  private total: string;
  private totalFormatted: string;
  private discountPrice?: string;
  private discountPriceFormatted?: string;
  private expressReorder?: boolean;

  private products?: Product[] = [];

  constructor( order: any ) {
    this.id = order.id;
    this.number = order.number;
    this.state = order.state;
    this.stateTitle = order.stateTitle;
    this.status = order.status;
    this.statusTitle = order.statusTitle;
    this.created = order.created;
    this.updated = order.updated;
    this.source = order.source;
    this.sourceTitle = order.sourceTitle;
    this.type = order.type;
    this.typeTitle = order.typeTitle;
    this.aftercareStoreEpos = order.aftercareStoreEpos;
    this.aftercareStoreName = order.aftercareStoreName;
    this.total = order.total;
    this.totalFormatted = order.totalFormatted;
    this.discountPrice = order.discountPrice;
    this.discountPriceFormatted = order.discountPriceFormatted;
    this.expressReorder = order.expressReorder;

    this.products = order.products;

  }

  getId(): string{
    return this.id;
  }

  getProducts(): Product[]{
    return this.products;
  }
}
