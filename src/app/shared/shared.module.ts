import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavHomeComponent } from './nav-home/nav-home.component';

import { MenuComponent } from './menu/menu.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { MenuUserComponent } from './menu-user/menu-user.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUgq63WqudGUS1CqHfLRvEb2ogj6sV9KA",
  authDomain: "proyectonotaria.firebaseapp.com",
  projectId: "proyectonotaria",
  storageBucket: "proyectonotaria.appspot.com",
  messagingSenderId: "725211129961",
  appId: "1:725211129961:web:b2cdf14ef5cf50206e9af8",
  measurementId: "G-ES40Q9CJTD"
};


@NgModule({
  declarations: [
    NavHomeComponent,
    MenuComponent,
    MenuUserComponent
  ],
  imports: [
    CommonModule,
    UiElementsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  exports: [
    MenuComponent,
    MenuUserComponent
  ]
})
export class SharedModule {
 }
