import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatusTramiteComponent } from './pages/status-tramite/status-tramite.component';

import { SharedModule } from '../shared/shared.module';
import {UiElementsModule} from '../ui-elements/ui-elements.module';

@NgModule({
  declarations: [
    MainPageComponent,
    ContactComponent,
    FaqComponent,
    StatusTramiteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UiElementsModule
  ]
})
export class HomeModule { }
