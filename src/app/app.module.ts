import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import {  HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { MainPageModule } from './main-page/main-page.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    MainPageModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    ErrorPageComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
