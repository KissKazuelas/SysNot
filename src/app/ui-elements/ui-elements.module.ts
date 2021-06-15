import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarModule,
    TableModule
  ]
})
export class UiElementsModule { }
