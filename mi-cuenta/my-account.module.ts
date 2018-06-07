import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { MyAccountComponent } from './my-account.component';
import { ProductComponent } from './product/product.component';
import { MyAccountService } from './my-account.service';

import { CollapseContentMenuComponent } from '../collapse-content-menu/collapse-content-menu.component';
import { MenuLinksComponent } from '../menu-links/menu-links.component';
import { CollapseComponent } from '../collapse/collapse.component';
import { TimelineComponent } from '../timeline/timeline.component';

import { MyAccountMenuComponent, MyAccountMenuTitleComponent } from './';

import { CardModule } from '../card/card.module';
import { FrameComponent } from './frame/frame.component';
import { ContactLensComponent } from './contact-lens/contact-lens.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    ProductComponent,
    MyAccountMenuComponent,
    MyAccountMenuTitleComponent,
    CollapseContentMenuComponent,
    MenuLinksComponent,
    CollapseComponent,
    TimelineComponent,
    FrameComponent,
    ContactLensComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    CardModule
  ],
  exports: [
    MyAccountComponent,
    MyAccountMenuComponent
  ],
  providers: [
    MyAccountService
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MyAccountModule {

}
