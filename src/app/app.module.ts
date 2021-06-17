import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../app/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import {UiElementsModule} from './ui-elements/ui-elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    UiElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
