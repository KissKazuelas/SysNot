import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgiterComponent } from './pages/resgiter/resgiter.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{
  path: '',
  component: ResgiterComponent,
  children: [
    //Listado de asuntos:
    { path: 'register', component: ResgiterComponent },
    
    { path: 'login', component: LoginComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
