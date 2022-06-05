import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from '@notes/auth/reducers';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule { }
