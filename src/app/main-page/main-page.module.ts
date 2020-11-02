import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageBannersComponent } from './main-page-banners/main-page-banners.component';
import { MainPageAdvantagesComponent } from './main-page-advantages/main-page-advantages.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageBannersComponent, 
    MainPageAdvantagesComponent, 
    MainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
