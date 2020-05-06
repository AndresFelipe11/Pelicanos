import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class UsersModule { }
