import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { ProductListPageComponent } from './components/product-list-page.component';
import { ProductDetailsPageComponent } from '@app/product-details-page/product-details-page.component';
import { GalleryComponent } from '@app/product-details-page/components/gallery/gallery.component';
import { DescriptionComponent } from '@app/product-details-page/components/description/description.component';
import { OptionsComponent } from '@app/product-details-page/components/options/options.component';
import { AddToCartComponent } from '@app/product-details-page/components/add-to-cart/add-to-cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailsPageComponent,
    GalleryComponent,
    DescriptionComponent,
    OptionsComponent,
    AddToCartComponent,
  ],
  imports: [
    CommonModule,
    ProductListPageRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('productsList', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class ProductListPageModule {}
