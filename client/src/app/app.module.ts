import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '@notes/app-routing.module';
import { AppComponent } from '@notes/core/components/app/app.component';
import { CoreModule } from '@notes/core/core.module';
import { AuthModule } from '@notes/auth/auth.module';
import { HttpRequestInterceptor } from '@notes/core/interceptors/http-request.interceptor';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
