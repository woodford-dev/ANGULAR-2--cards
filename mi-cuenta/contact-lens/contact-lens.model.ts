import { Product } from '../product/product.model';

export class ContactLens extends Product {

  private plu: string;
  private baseCurve: string;
  private eye: string;

  constructor( contactLens: any ) {
    super( contactLens );

    this.plu = contactLens.plu;
    this.baseCurve = contactLens.baseCurve;
    this.eye = contactLens.eye;
  }
}
