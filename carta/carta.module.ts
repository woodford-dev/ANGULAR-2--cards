import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaContenedorComponent } from './carta-contenedor.component';
import { CartaTituloComponent } from './carta-titulo/carta-titulo.component';

import { SharedModule } from '../shared/shared.module';

import { BotonComponent } from '../boton/boton.component';

@NgModule({
  declarations: [
    CartaContenedorComponent,
    CartaTituloComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartaContenedorComponent,
    CartaTituloComponent,
  ],
  providers: []
})
export class CartaModule {

}
