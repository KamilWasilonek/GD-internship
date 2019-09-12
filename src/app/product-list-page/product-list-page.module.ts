import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListPageComponent } from './components/product-list-page.component';
import { ProductListPageRoutingModule } from './product-list-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductDetailsPageComponent } from '@app/product-details-page/product-details-page.component';
import { GalleryComponent } from '@app/product-details-page/components/gallery/gallery.component';
import { DescriptionComponent } from '@app/product-details-page/components/description/description.component';
import { OptionsComponent } from '@app/product-details-page/components/options/options.component';
import { AddToCartComponent } from '@app/product-details-page/components/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailsPageComponent,
    GalleryComponent,
    DescriptionComponent,
    OptionsComponent,
    AddToCartComponent,
  ],
  imports: [CommonModule, ProductListPageRoutingModule, SharedModule],
})
export class ProductListPageModule {}
