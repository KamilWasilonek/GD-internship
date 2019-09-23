import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListPageComponent } from './components/product-list-page.component';
import { ProductDetailsPageComponent } from '../product-details-page/product-details-page.component';

const routes: Routes = [{ path: '', component: ProductListPageComponent }, { path: ':id', component: ProductDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListPageRoutingModule {}
