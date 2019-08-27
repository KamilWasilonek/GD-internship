import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './components/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';

@NgModule({
  declarations: [HomePageComponent, BannerComponent, ArrivalsComponent, AdvertisementsComponent],
  imports: [CommonModule, HomePageRoutingModule, HttpClientModule],
})
export class HomePageModule {}
