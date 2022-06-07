import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAuth from '@notes/auth/reducers';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthEffects } from './effects/auth.effects';
import { UserEffects } from './effects/user.effects';
import { GuestOnlyGuard } from './guards/guest-only.guard';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([AuthEffects, UserEffects]),
  ],
  providers: [
    GuestOnlyGuard,
  ],
})
export class AuthModule { }
