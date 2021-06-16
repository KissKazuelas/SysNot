import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MenubarModule,
    TableModule,
    CardModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
  ]
})
export class UiElementsModule { }
