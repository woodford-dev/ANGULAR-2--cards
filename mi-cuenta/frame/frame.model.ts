import { Product } from '../product/product.model';
import { LensPackage } from './lens-package/lens-package.model';

export class Frame extends Product {

  private lensPackage?: LensPackage;
  private sku: string;

  constructor( frame: any ) {
    super( frame );

    this.lensPackage = frame.lensPackage;
    this.sku = frame.sku;
  }
}
