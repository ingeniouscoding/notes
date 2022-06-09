import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@notes/app-routing.module';
import { AppComponent } from '@notes/core/components/app/app.component';
import { CoreModule } from '@notes/core/core.module';
import { AuthModule } from '@notes/auth/auth.module';
import { HttpRequestInterceptor } from '@notes/core/interceptors/http-request.interceptor';
import { environment } from '../environments/environment';
import { reducers } from './app.state';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(
      { maxAge: 25, logOnly: environment.production }
    ),
    AppRoutingModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
