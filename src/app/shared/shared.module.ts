import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavHomeComponent } from './nav-home/nav-home.component';

import { MenuComponent } from './menu/menu.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';




@NgModule({
  declarations: [
    NavHomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    UiElementsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule {
 }
