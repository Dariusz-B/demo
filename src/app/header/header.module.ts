import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderTopBarComponent } from './header-top-bar/header-top-bar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MenuService } from '../services/menu.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopBarComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    MenuService
  ]
})
export class HeaderModule { }
