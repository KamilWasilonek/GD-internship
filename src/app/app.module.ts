import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactComponent } from './core/components/header/contact-bar/contact/contact.component';
import { ContactBarComponent } from './core/components/header/contact-bar/contact-bar.component';
import { SocialsComponent } from './core/components/header/contact-bar/socials/socials.component';
import { CustomErrorHandler } from './shared/services/error-handler/custom-error-handler';
import { ServerErrorsInterceptor } from './shared/services/error-handler/server-errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ContactComponent,
    ContactBarComponent,
    SocialsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
