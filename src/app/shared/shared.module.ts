import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SmallTitleComponent } from './components/small-title/small-title.component';
import { LogoComponent } from './components/logo/logo.component';
import { ActionIconsComponent } from './components/action-icons/action-icons.component';
import { CommonProductsComponent } from './components/common-products/common-products.component';

@NgModule({
  declarations: [ProductItemComponent, SmallTitleComponent, SpinnerComponent, LogoComponent, ActionIconsComponent, CommonProductsComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    ProductItemComponent,
    SmallTitleComponent,
    SpinnerComponent,
    LogoComponent,
    RouterModule,
    ActionIconsComponent,
    CommonProductsComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
