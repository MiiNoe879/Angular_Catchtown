import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AuthService} from '../../core/auth/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../../core/auth/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class AuthModule { }
