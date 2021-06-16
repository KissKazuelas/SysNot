import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { AddAsuntoComponent } from './pages/add-asunto/add-asunto.component';
import { AddClienteComponent } from './pages/add-cliente/add-cliente.component';
import { AddTipoAsuntoComponent } from './pages/add-tipo-asunto/add-tipo-asunto.component';
import { AddTramiteComponent } from './pages/add-tramite/add-tramite.component';
import { VerAsuntoComponent } from './pages/ver-asunto/ver-asunto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoUserComponent } from './pages/listado-user/listado-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import {AddClienteTelefonoComponent} from './pages/add-cliente-telefono/add-cliente-telefono.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    //Listado de asuntos:
    { path: 'dashboard', component: DashboardAdminComponent },
    //USUARIOS
    //Agregar
    { path: 'agregarUsuario', component: AddUserComponent },
    //Editar:
    { path: 'editarUsuario/:id', component: AddUserComponent },
    //Ver Usuarios:
    { path: 'listadoUsuarios', component: ListadoUserComponent },
    //ASUNTOS
    //Agregar
    { path: 'agregarAsunto', component: AddAsuntoComponent },
    //Editar (En caso de algun error al registro o re-asignacion)
    { path: 'editarAsunto/:id', component: AddAsuntoComponent },
    //Agregar tipo ( Categoria )
    { path: 'agregarTipoAsunto', component: AddTipoAsuntoComponent },
    //CLIENTES
    //Agregar:
    { path: 'agregarCliente', component: AddClienteComponent },
    //Editar
    { path: 'editarCliente/:id', component: AddClienteComponent },
    //Ver Clientes
    { path: 'listadoClientes', component: ListadoClientesComponent },

    { path: 'agregarTramite', component: AddTramiteComponent },
    { path: 'agregarUsuarioPhone', component: AddClienteTelefonoComponent },
    { path: ':id', component: VerAsuntoComponent },
    { path: '**', redirectTo: 'dashboard' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
