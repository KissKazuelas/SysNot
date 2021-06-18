import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { AddAsuntoComponent } from './pages/add-asunto/add-asunto.component';
import { AddTipoAsuntoComponent } from './pages/add-tipo-asunto/add-tipo-asunto.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { GeneratorQrComponent } from './pages/generator-qr/generator-qr.component';
import { AddTramiteComponent } from './pages/add-tramite/add-tramite.component';
import { HomeComponent } from './pages/home/home.component';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { SharedModule } from '../shared/shared.module';
import { VerAsuntoComponent } from './pages/ver-asunto/ver-asunto.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListadoUserComponent } from './pages/listado-user/listado-user.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClienteTelefonoComponent } from './pages/add-cliente-telefono/add-cliente-telefono.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';



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
    AddClienteComponent,
    AddAsuntoComponent,
    AddTipoAsuntoComponent,
    DashboardAdminComponent,
    GeneratorQrComponent,
    AddTramiteComponent,
    HomeComponent,
    VerAsuntoComponent,
    AddUserComponent,
    ListadoUserComponent,
    ListadoClientesComponent,
    AddClienteTelefonoComponent,
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiElementsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgxQRCodeModule,
  ],
  exports:[
    ListadoUserComponent
  ]
})
export class AdminModule {

}
