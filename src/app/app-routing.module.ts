import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './home/pages/main-page/main-page.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { FaqComponent } from './home/pages/faq/faq.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
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
    path: '**',
    redirectTo: ''
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
