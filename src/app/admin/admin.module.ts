import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { AddAsuntoComponent } from './pages/add-asunto/add-asunto.component';
import { AddTipoAsuntoComponent } from './pages/add-tipo-asunto/add-tipo-asunto.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { GeneratorQrComponent } from './pages/generator-qr/generator-qr.component';
import { AddTramiteComponent } from './pages/add-tramite/add-tramite.component';


@NgModule({
  declarations: [
    AddClienteComponent,
    AddAsuntoComponent,
    AddTipoAsuntoComponent,
    DashboardAdminComponent,
    GeneratorQrComponent,
    AddTramiteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
