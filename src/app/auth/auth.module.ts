import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResgiterComponent } from './pages/resgiter/resgiter.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    ResgiterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UiElementsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
