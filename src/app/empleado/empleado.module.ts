import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { SharedModule } from '../shared/shared.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';

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
    HomeComponent,
    DashboardComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    UiElementsModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmpleadoModule { }
