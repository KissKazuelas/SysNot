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
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiElementsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ListadoUserComponent
  ]
})
export class AdminModule { }
