import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';



@NgModule({
  declarations: [
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
export class SharedModule { }
