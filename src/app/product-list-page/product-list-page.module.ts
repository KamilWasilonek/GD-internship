import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListPageComponent } from './components/product-list-page.component'
import { ProductListPageRoutingModule } from './product-list-page-routing.module'
import { ProductDetailsPageComponent } from '../product-details-page/components/product-details-page.component'

@NgModule({
  declarations: [ProductListPageComponent, ProductDetailsPageComponent],
  imports: [CommonModule, ProductListPageRoutingModule],
})
export class ProductListPageModule {}
