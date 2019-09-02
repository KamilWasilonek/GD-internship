import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './components/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, BannerComponent, ArrivalsComponent, AdvertisementsComponent, ViewMoreComponent],
  imports: [CommonModule, HomePageRoutingModule, HttpClientModule, SharedModule],
})
export class HomePageModule {}
