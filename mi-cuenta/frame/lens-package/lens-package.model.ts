import { Lens } from './lens.model';
import { LensOption } from './lens-option.model';

export class LensPackage {

  private total: string;
  private totalFormatted: string;
  private lens: Lens;
  private lensOptions: LensOption[];

  constructor( lensPackage: any ) {
    this.total = lensPackage.total;
    this.totalFormatted = lensPackage.totalFormatted;
    this.lens = lensPackage.lens;
    this.lensOptions = lensPackage.lensOptions;
  }
}
