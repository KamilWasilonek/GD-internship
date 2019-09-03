import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactComponent } from './core/components/header/contact-bar/contact/contact.component';
import { ContactBarComponent } from './core/components/header/contact-bar/contact-bar.component';
import { SocialsComponent } from './core/components/header/contact-bar/socials/socials.component';
import { CustomErrorHandler } from './shared/services/error-handler/custom-error-handler';
import { ServerErrorsInterceptor } from './shared/services/error-handler/server-errors.interceptor';
import { MenuComponent } from './core/components/header/menu/menu.component';
import { NavigationComponent } from './core/components/header/menu/navigation/navigation.component';
import { ActionsComponent } from './core/components/header/menu/actions/actions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './core/components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ContactComponent,
    ContactBarComponent,
    SocialsComponent,
    MenuComponent,
    NavigationComponent,
    ActionsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule, SharedModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
