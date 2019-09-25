import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomePageComponent } from './components/home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { BestSalesItemComponent } from './components/best-sales-item/best-sales-item.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';

import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';
@NgModule({
  declarations: [HomePageComponent, BannerComponent, AdvertisementsComponent, ViewMoreComponent, BestSalesItemComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('homePage', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class HomePageModule {}
