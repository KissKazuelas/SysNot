import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './home/pages/main-page/main-page.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { FaqComponent } from './home/pages/faq/faq.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuardAdmin } from './auth/guards/authAdmin.guard';
import { AuthUserGuard } from './auth/guards/auth-user.guard';
import { StatusTramiteComponent } from './home/pages/status-tramite/status-tramite.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
    canLoad: [ AuthGuardAdmin ],
    canActivate: [AuthGuardAdmin]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./empleado/empleado.module').then( m => m.EmpleadoModule),
    canLoad: [ AuthUserGuard ],
    canActivate: [AuthUserGuard]
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'nosotros',
    component: ContactComponent,
  },
  {
    path: 'FAQ',
    component: FaqComponent,
  },
  {
    path: 'statusTramite/:id',
    component: StatusTramiteComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
