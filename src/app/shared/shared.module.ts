import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavHomeComponent } from './nav-home/nav-home.component';

import { MenuComponent } from './menu/menu.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavHomeComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiElementsModule
  ],
  exports: [
    MenuComponent,
    NavHomeComponent,
    FooterComponent
  ]
})
export class SharedModule {
 }
