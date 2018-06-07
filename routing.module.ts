import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyAccountComponent } from './mi-cuenta/';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'mi-cuenta', pathMatch: 'full' },
      { path: 'mi-cuenta', component: MyAccountComponent }
    ])
  ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class RoutingModule { };
