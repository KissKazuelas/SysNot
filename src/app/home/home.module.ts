import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
