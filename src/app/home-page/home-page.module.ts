import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomePageComponent } from './components/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { BestSalesItemComponent } from './components/best-sales-item/best-sales-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, BannerComponent, AdvertisementsComponent, ViewMoreComponent, BestSalesItemComponent],
  imports: [CommonModule, HomePageRoutingModule, HttpClientModule, SharedModule, FontAwesomeModule],
})
export class HomePageModule {}
