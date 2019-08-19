import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactComponent } from './core/components/header/contact-bar/contact/contact.component';
import { ContactBarComponent } from './core/components/header/contact-bar/contact-bar.component';
import { SocialsComponent } from './core/components/header/contact-bar/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ContactComponent,
    ContactBarComponent,
    SocialsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
