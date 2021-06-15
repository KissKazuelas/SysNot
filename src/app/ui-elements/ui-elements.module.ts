import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {CascadeSelectModule} from 'primeng/cascadeselect';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarModule,
    TableModule,
    CardModule,
    CascadeSelectModule
  ]
})
export class UiElementsModule { }
