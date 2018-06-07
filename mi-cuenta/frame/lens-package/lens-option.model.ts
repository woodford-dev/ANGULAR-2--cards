export class LensOption {

  private type: string;
  private sku: string;
  private title: string;
  private price: string;
  private priceFormatted: string;

  constructor( lensOption: any ) {
    this.type = lensOption.type;
    this.sku = lensOption.sku;
    this.title = lensOption.title;
    this.price = lensOption.price;
    this.priceFormatted = lensOption.priceFormatted;

  }
}
