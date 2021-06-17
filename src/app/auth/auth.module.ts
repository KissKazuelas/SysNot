import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResgiterComponent } from './pages/resgiter/resgiter.component';
import { LoginComponent } from './pages/login/login.component';



import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

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
    ResgiterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiElementsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
})
export class AuthModule { }
