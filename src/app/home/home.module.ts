import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { StatusTramiteComponent } from './pages/status-tramite/status-tramite.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ContactComponent,
    FaqComponent,
    StatusTramiteComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, UiElementsModule
  ]
})
export class HomeModule { }
