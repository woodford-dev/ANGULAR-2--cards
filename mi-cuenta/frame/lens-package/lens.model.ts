export class Lens {

  private sku: string;
  private title: string;
  private price: string;
  private priceFormatted: string;

  constructor( lens: any ) {
    this.sku = lens.sku;
    this.title = lens.title;
    this.price = lens.price;
    this.priceFormatted = lens.priceFormatted;

  }
}
