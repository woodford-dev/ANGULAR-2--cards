export class Product {

  public brand: string;
  public title: string;
  public label: string;
  public quantity: any;
  public price: string;
  public totalFormatted: string;
  public totalPrice: Number;
  public hidden: Number;
  public type: string;

  constructor( product: any ) {
    this.brand = product.brand;
    this.title = product.title;
    this.label = product.label;
    this.quantity = product.quantity;
    this.price = product.price;
    this.totalPrice = product.totalPrice;
    this.totalFormatted = product.totalFormatted;
    this.hidden = product.hidden;
    this.type = product.type;
  }
}
