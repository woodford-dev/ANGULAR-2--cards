import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';

import { MyAccountModule } from './mi-cuenta/my-account.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MyAccountModule,
  ],
  providers: [ ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
